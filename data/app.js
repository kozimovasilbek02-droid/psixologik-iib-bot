// State Management
const AppState = {
  language: 'lat', // 'lat', 'cyr', 'rus'
  alphabet: 'lat', // 'lat', 'cyr'
  userName: 'Foydalanuvchi',
  currentStage: 0, // 0: Setup, 1: Logic, 2: Images, 3: Psycho, 4: Results
  
  stage1: {
    name: { lat: '1-Bosqich: Mantiqiy Savollar', cyr: '1-Босқич: Мантиқий Саволлар', rus: '1-й Этап: Логические вопросы' },
    questions: [],
    currentIndex: 0,
    answers: {},
    tempSelected: undefined,
    timeLimit: 5 * 60 // 5 minutes
  },
  stage2: {
    name: { lat: '2-Bosqich: Rasmli Savollar', cyr: '2-Босқич: Расмли Саволлар', rus: '2-й Этап: Вопросы с картинками' },
    questions: [],
    currentIndex: 0,
    answers: {},
    tempSelected: undefined,
    timeLimit: 5 * 60 // 5 minutes
  },
  stage3: {
    name: { lat: '3-Bosqich: Psixologik Test', cyr: '3-Босқич: Психологик Тест', rus: '3-й Этап: Психологический тест' },
    questions: [],
    currentIndex: 0,
    answers: {},
    tempSelected: undefined,
    timeLimit: 45 * 60 // 45 minutes
  }
};

let activeTimer = null;

// Fisher-Yates Shuffle
function shuffleArray(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Language selection
function setupLanguageControls() {
  const langRadios = document.querySelectorAll('input[name="app-lang"]');

  langRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      document.querySelectorAll('.lang-card').forEach(c => c.classList.remove('selected'));
      e.target.closest('.lang-card').classList.add('selected');

      const val = e.target.value;
      if (val === 'rus') {
        AppState.language = 'rus';
        AppState.alphabet = 'cyr';
      } else if (val === 'uz_cyr') {
        AppState.language = 'cyr';
        AppState.alphabet = 'cyr';
      } else {
        AppState.language = 'lat';
        AppState.alphabet = 'lat';
      }
    });
  });
}

function getCurrentStageObj() {
  if (AppState.currentStage === 1) return AppState.stage1;
  if (AppState.currentStage === 2) return AppState.stage2;
  if (AppState.currentStage === 3) return AppState.stage3;
  return null;
}

// Switch Stage View
function switchStage(stageNumber) {
  AppState.currentStage = stageNumber;
  document.querySelectorAll('.stage-section').forEach(s => s.classList.remove('active'));

  if (activeTimer) {
    activeTimer.stop();
  }

  if (stageNumber >= 1 && stageNumber <= 3) {
    document.getElementById('stage-active-test-view').classList.add('active');
    
    // Set user name display in sidebar
    const sbUser = document.getElementById('sidebar-user-name');
    if (sbUser) sbUser.textContent = AppState.userName;

    if (stageNumber === 1) initStage1();
    else if (stageNumber === 2) initStage2();
    else if (stageNumber === 3) initStage3();

  } else if (stageNumber === 4) {
    document.getElementById('stage-results-view').classList.add('active');
    ResultsManager.renderResults(AppState);
  } else {
    document.getElementById('stage-setup-view').classList.add('active');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Helper: Find next unanswered index in stage
function findNextUnanswered(stage) {
  const total = stage.questions.length;
  for (let i = 1; i <= total; i++) {
    const nextIdx = (stage.currentIndex + i) % total;
    if (stage.answers[nextIdx] === undefined) {
      return nextIdx;
    }
  }
  return null; // All answered
}

// -------------------------------------------------------------
// STAGE INITIALIZERS
// -------------------------------------------------------------
function initStage1() {
  const shuffledPool = shuffleArray(LOGIC_QUESTIONS);
  const selected = shuffledPool.slice(0, 5).map(q => ({
    ...q,
    options: shuffleArray(q.options)
  }));
  AppState.stage1.questions = selected;
  AppState.stage1.currentIndex = 0;
  AppState.stage1.answers = {};
  AppState.stage1.tempSelected = undefined;

  activeTimer = new TestTimer('sidebar-timer-digits', () => {
    alert("1-Bosqich vaqti tugadi! 2-bosqichga o'tilmoqda.");
    switchStage(2);
  });
  activeTimer.start(AppState.stage1.timeLimit);

  renderActiveQuestion();
}

function initStage2() {
  const shuffledPool = shuffleArray(IMAGE_QUESTIONS);
  const selected = shuffledPool.slice(0, 5).map(q => ({
    ...q,
    options: shuffleArray(q.options)
  }));
  AppState.stage2.questions = selected;
  AppState.stage2.currentIndex = 0;
  AppState.stage2.answers = {};
  AppState.stage2.tempSelected = undefined;

  activeTimer = new TestTimer('sidebar-timer-digits', () => {
    alert("2-Bosqich vaqti tugadi! 3-bosqichga o'tilmoqda.");
    switchStage(3);
  });
  activeTimer.start(AppState.stage2.timeLimit);

  renderActiveQuestion();
}

function initStage3() {
  AppState.stage3.questions = shuffleArray(PSYCHO_QUESTIONS);
  AppState.stage3.currentIndex = 0;
  AppState.stage3.answers = {};
  AppState.stage3.tempSelected = undefined;

  activeTimer = new TestTimer('sidebar-timer-digits', () => {
    alert("Psixologik test vaqti tugadi! Natijalar hisoblanmoqda.");
    switchStage(4);
  });
  activeTimer.start(AppState.stage3.timeLimit);

  renderActiveQuestion();
}

// -------------------------------------------------------------
// MAIN RENDERER (1, 2) + SIDEBAR TRACKERS (4, 5, 6)
// -------------------------------------------------------------
function renderActiveQuestion() {
  const stage = getCurrentStageObj();
  if (!stage || !stage.questions.length) return;

  const q = stage.questions[stage.currentIndex];
  const lang = AppState.language;
  const isCommitted = (stage.answers[stage.currentIndex] !== undefined);
  const selectedIdx = isCommitted ? stage.answers[stage.currentIndex] : stage.tempSelected;

  // 1: Stage top bar
  const badge = document.getElementById('current-stage-badge');
  if (badge) badge.textContent = stage.name[lang] || stage.name.lat;

  const counter = document.getElementById('global-question-counter');
  if (counter) counter.textContent = `${stage.currentIndex + 1} / ${stage.questions.length}`;

  const progress = document.getElementById('global-stage-progress');
  if (progress) progress.style.width = `${((stage.currentIndex + 1) / stage.questions.length) * 100}%`;

  // 2: Question text & image
  const qText = document.getElementById('active-question-text');
  if (qText) qText.textContent = q.question[lang] || q.question.lat;

  const imgBox = document.getElementById('active-image-box');
  const imgEl = document.getElementById('active-question-img');
  if (q.image) {
    imgBox.style.display = 'flex';
    imgEl.src = q.image;
    imgEl.onclick = () => openImageModal(q.image);
  } else {
    imgBox.style.display = 'none';
  }

  // 2: Options
  const optContainer = document.getElementById('active-options-container');
  optContainer.innerHTML = '';

  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, idx) => {
    const isSelected = (selectedIdx === idx);
    const btn = document.createElement('div');
    btn.className = 'option-btn ' + (isSelected ? 'selected ' : '') + (isCommitted ? 'locked ' : '');
    btn.innerHTML = `
      <div class="option-letter">${letters[idx] || (idx + 1)}</div>
      <div class="option-content">${opt.text[lang] || opt.text.lat}</div>
      ${isCommitted && isSelected ? '<span style="margin-left: auto; font-size: 0.9rem; color: var(--accent-cyan);">🔒 Belgilandi</span>' : ''}
    `;

    if (!isCommitted) {
      btn.onclick = () => {
        // Allow freely selecting and changing choice
        stage.tempSelected = idx;
        renderActiveQuestion();
      };
    }
    optContainer.appendChild(btn);
  });

  // Action Buttons
  document.getElementById('nav-prev-btn').disabled = (stage.currentIndex === 0);

  // Skip button
  const skipBtn = document.getElementById('nav-skip-btn');
  const nextUnanswered = findNextUnanswered(stage);
  if (skipBtn) {
    skipBtn.disabled = (nextUnanswered === null || isCommitted);
  }

  // Next / Finish button
  const nextBtn = document.getElementById('nav-next-btn');
  const allAnswered = (Object.keys(stage.answers).length === stage.questions.length);
  if (stage.currentIndex === stage.questions.length - 1 || allAnswered) {
    if (AppState.currentStage === 3) {
      nextBtn.textContent = AppState.language === 'rus' ? 'Завершить тест' : 'Testni yakunlash';
    } else {
      nextBtn.textContent = AppState.language === 'rus' ? 'Завершить этап' : 'Bosqichni yakunlash';
    }
    nextBtn.className = 'btn btn-success';
  } else {
    nextBtn.textContent = AppState.language === 'rus' ? 'Следующий' : 'Keyingisi';
    nextBtn.className = 'btn btn-primary';
  }

  // Render Sidebar Trackers (4, 5, 6)
  renderSidebarTrackers();
}

// -------------------------------------------------------------
// SIDEBAR TRACKERS RENDERER (4, 5, 6: Yumaloq shakllar)
// -------------------------------------------------------------
function renderSidebarTrackers() {
  // Update Stage 1 Tracker (4)
  renderStageTracker(1, AppState.stage1, 'tracker-stage-1', 's1-tracker-stats', 's1-circle-grid', 5);
  // Update Stage 2 Tracker (5)
  renderStageTracker(2, AppState.stage2, 'tracker-stage-2', 's2-tracker-stats', 's2-circle-grid', 5);
  // Update Stage 3 Tracker (6)
  renderStageTracker(3, AppState.stage3, 'tracker-stage-3', 's3-tracker-stats', 's3-circle-grid', 86);
}

function renderStageTracker(stageNum, stageObj, cardId, statsId, gridId, defaultCount) {
  const card = document.getElementById(cardId);
  const stats = document.getElementById(statsId);
  const grid = document.getElementById(gridId);
  if (!card || !stats || !grid) return;

  const isCurrentStage = (AppState.currentStage === stageNum);
  const isPastStage = (AppState.currentStage > stageNum);

  if (isCurrentStage) {
    card.className = 'sidebar-block stage-tracker-card active-stage';
  } else if (isPastStage) {
    card.className = 'sidebar-block stage-tracker-card';
  } else {
    card.className = 'sidebar-block stage-tracker-card disabled-stage';
  }

  const count = stageObj.questions.length || defaultCount;
  const answeredCount = Object.keys(stageObj.answers).length;
  stats.textContent = `${answeredCount} / ${count} ta belgilandi`;

  grid.innerHTML = '';
  for (let idx = 0; idx < count; idx++) {
    const isAnswered = (stageObj.answers[idx] !== undefined);
    const isActive = (isCurrentStage && stageObj.currentIndex === idx);

    const circle = document.createElement('button');
    circle.className = 'circle-btn' + (isAnswered ? ' answered' : '') + (isActive ? ' active' : '');
    circle.textContent = idx + 1;

    if (isCurrentStage) {
      circle.onclick = () => {
        // If current question had temporary uncommitted selection, keep or clear it
        stageObj.tempSelected = undefined;
        stageObj.currentIndex = idx;
        renderActiveQuestion();
      };
    } else {
      circle.style.cursor = 'default';
    }
    grid.appendChild(circle);
  }
}

// Modal zoom for images
function openImageModal(imgSrc) {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  if (modal && modalImg) {
    modalImg.src = imgSrc;
    modal.classList.add('active');
  }
}

function closeImageModal() {
  const modal = document.getElementById('image-modal');
  if (modal) modal.classList.remove('active');
}

// Theme and Font Zoom Handlers
function setupThemeAndFontControls() {
  // Theme Toggle (Light / Dark)
  const themeBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const themeLabel = document.getElementById('theme-label');

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('theme-light');
      if (isLight) {
        if (themeIcon) themeIcon.textContent = '🌙';
        if (themeLabel) themeLabel.textContent = 'Qorong\'u';
      } else {
        if (themeIcon) themeIcon.textContent = '☀️';
        if (themeLabel) themeLabel.textContent = 'Yorug\'';
      }
    });
  }

  // Font Size Resizer (A-, A, A+)
  const fontDecBtn = document.getElementById('font-dec-btn');
  const fontResetBtn = document.getElementById('font-reset-btn');
  const fontIncBtn = document.getElementById('font-inc-btn');
  const fontBtns = [fontDecBtn, fontResetBtn, fontIncBtn];

  function setFontScale(scaleClass, activeBtn) {
    document.documentElement.classList.remove('font-scale-sm', 'font-scale-md', 'font-scale-lg', 'font-scale-xl');
    if (scaleClass) {
      document.documentElement.classList.add(scaleClass);
    }
    fontBtns.forEach(b => { if (b) b.classList.remove('active'); });
    if (activeBtn) activeBtn.classList.add('active');
  }

  if (fontDecBtn) {
    fontDecBtn.addEventListener('click', () => setFontScale('font-scale-sm', fontDecBtn));
  }
  if (fontResetBtn) {
    fontResetBtn.addEventListener('click', () => setFontScale('font-scale-md', fontResetBtn));
  }
  if (fontIncBtn) {
    fontIncBtn.addEventListener('click', () => setFontScale('font-scale-lg', fontIncBtn));
  }
}

// Navigation event bindings
document.addEventListener('DOMContentLoaded', () => {
  setupLanguageControls();
  setupThemeAndFontControls();

  // Start Test Button
  document.getElementById('start-test-btn').addEventListener('click', () => {
    const nameInput = document.getElementById('user-name-input');
    if (nameInput && nameInput.value.trim()) {
      AppState.userName = nameInput.value.trim();
      const userDisplay = document.getElementById('header-user-display');
      if (userDisplay) userDisplay.textContent = AppState.userName;
    }
    switchStage(1);
  });

  // Action Buttons
  document.getElementById('nav-prev-btn').addEventListener('click', () => {
    const stage = getCurrentStageObj();
    if (stage && stage.currentIndex > 0) {
      stage.tempSelected = undefined;
      stage.currentIndex--;
      renderActiveQuestion();
    }
  });

  document.getElementById('nav-skip-btn').addEventListener('click', () => {
    const stage = getCurrentStageObj();
    if (!stage) return;
    stage.tempSelected = undefined;
    const nextIdx = findNextUnanswered(stage);
    if (nextIdx !== null) {
      stage.currentIndex = nextIdx;
      renderActiveQuestion();
    } else if (stage.currentIndex < stage.questions.length - 1) {
      stage.currentIndex++;
      renderActiveQuestion();
    }
  });

  // Keyingisi (Next) Button: Officially commits the selected option!
  document.getElementById('nav-next-btn').addEventListener('click', () => {
    const stage = getCurrentStageObj();
    if (!stage) return;

    // Commit answer if an option was selected
    if (stage.tempSelected !== undefined) {
      stage.answers[stage.currentIndex] = stage.tempSelected;
      stage.tempSelected = undefined;
    }

    if (stage.currentIndex < stage.questions.length - 1) {
      stage.currentIndex++;
      renderActiveQuestion();
    } else {
      // Check if all answered or proceed
      switchStage(AppState.currentStage + 1);
    }
  });

  // Modal close
  const modalClose = document.getElementById('modal-close-btn');
  if (modalClose) modalClose.onclick = closeImageModal;
  const modal = document.getElementById('image-modal');
  if (modal) modal.onclick = (e) => { if (e.target === modal) closeImageModal(); };

  // Muddatidan oldin testni yakunlash (Finish Early Button)
  const finishEarlyBtn = document.getElementById('nav-finish-early-btn');
  if (finishEarlyBtn) {
    finishEarlyBtn.addEventListener('click', () => {
      const stage = getCurrentStageObj();
      if (stage && stage.tempSelected !== undefined) {
        stage.answers[stage.currentIndex] = stage.tempSelected;
      }
      
      const confirmTexts = {
        lat: "Haqiqatan ham testni muddatidan oldin yakunlab, natijalarni ko'rmoqchimisiz?",
        cyr: "Ҳақиқатан ҳам тестни муддатидан олдин якунлаб, натижаларни кўрмоқчимисиз?",
        rus: "Вы действительно хотите завершить тест досрочно и увидеть результаты?"
      };
      const text = confirmTexts[AppState.language] || confirmTexts.lat;
      
      if (confirm(text)) {
        if (activeTimer) activeTimer.stop();
        switchStage(4); // Direct jump to Results
      }
    });
  }

  // Telegram WebApp Auto-Init
  try {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  } catch (e) {
    console.log("Telegram WebApp not available in browser mode");
  }

  // Retake button
  const retakeBtn = document.getElementById('retake-test-btn');
  if (retakeBtn) {
    retakeBtn.addEventListener('click', () => {
      switchStage(0);
    });
  }
});
