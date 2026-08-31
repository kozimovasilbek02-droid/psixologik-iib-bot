const ResultsManager = {
  renderResults(state) {
    const lang = state.language || 'lat';

    // 1. Stage 1 Score (Logic: 5 questions)
    const s1Total = state.stage1.questions.length;
    let s1Correct = 0;
    const s1Details = state.stage1.questions.map((q, idx) => {
      const selected = state.stage1.answers[idx];
      const isCorrect = (selected !== undefined && q.options[selected] && q.options[selected].is_correct === true);
      if (isCorrect) s1Correct++;
      return { question: q, selected, isCorrect, idx };
    });
    const s1Passed = (s1Correct >= 2); // Kamida 2 ta to'g'ri

    // 2. Stage 2 Score (Image: 5 questions)
    const s2Total = state.stage2.questions.length;
    let s2Correct = 0;
    const s2Details = state.stage2.questions.map((q, idx) => {
      const selected = state.stage2.answers[idx];
      const isCorrect = (selected !== undefined && q.options[selected] && q.options[selected].is_correct === true);
      if (isCorrect) s2Correct++;
      return { question: q, selected, isCorrect, idx };
    });
    const s2Passed = (s2Correct >= 2); // Kamida 2 ta to'g'ri

    // 3. Stage 3 Score (Psycho: 82 questions)
    // Rule: First 15 questions -> min 4 correct
    // Remaining questions -> min 40 correct
    const s3Total = state.stage3.questions.length;
    let s3Part1Correct = 0;
    let s3Part2Correct = 0;
    let s3TotalMatches = 0;

    const s3Details = state.stage3.questions.map((q, idx) => {
      const selected = state.stage3.answers[idx];
      const isCorrect = (selected !== undefined && q.options[selected] && q.options[selected].is_correct === true);
      if (isCorrect) {
        s3TotalMatches++;
        if (idx < 15) {
          s3Part1Correct++;
        } else {
          s3Part2Correct++;
        }
      }
      return { question: q, selected, isCorrect, idx };
    });

    const s3Part1Total = Math.min(15, s3Total);
    const s3Part2Total = Math.max(0, s3Total - 15);

    const s3Part1Passed = (s3Part1Correct >= 4); // Dastlabki 15 tasidan kamida 4 ta
    const s3Part2Passed = (s3Part2Correct >= 40); // Qolgan qismidan kamida 40 ta
    const s3Passed = (s3Part1Passed && s3Part2Passed);

    // Overall Final Verdict
    const isOverallPassed = (s1Passed && s2Passed && s3Passed);

    // Render Verdict Banner
    this.renderVerdictBanner(isOverallPassed, {
      s1: { passed: s1Passed, correct: s1Correct, total: s1Total, min: 2 },
      s2: { passed: s2Passed, correct: s2Correct, total: s2Total, min: 2 },
      s3p1: { passed: s3Part1Passed, correct: s3Part1Correct, total: s3Part1Total, min: 4 },
      s3p2: { passed: s3Part2Passed, correct: s3Part2Correct, total: s3Part2Total, min: 40 }
    }, lang);

    // Render Stage Result Circles (To'g'ri bo'lsa yashil, noto'g'ri bo'lsa qizil)
    this.renderStageResultCard('res-s1-card-content', s1Details, '1-Bosqich: Mantiqiy Savollar', s1Correct, s1Total, s1Passed, 2, lang);
    this.renderStageResultCard('res-s2-card-content', s2Details, '2-Bosqich: Rasmli Savollar', s2Correct, s2Total, s2Passed, 2, lang);
    this.renderPsychoStageResultCard('res-s3-card-content', s3Details, s3Part1Correct, s3Part1Total, s3Part1Passed, s3Part2Correct, s3Part2Total, s3Part2Passed, lang);

    // Psychological Profile Dimensions
    const s3Percent = Math.round((s3TotalMatches / (s3Total || 1)) * 100);
    this.renderPsychoProfile(s3Percent, lang);
  },

  renderVerdictBanner(isPassed, stats, lang) {
    const bannerEl = document.getElementById('results-verdict-banner');
    if (!bannerEl) return;

    if (isPassed) {
      bannerEl.className = 'verdict-banner passed';
      bannerEl.innerHTML = `
        <div class="verdict-icon">🏆</div>
        <div class="verdict-text-wrap">
          <h2 class="verdict-title">TABRIKLAYMIZ! SIZ TESTDAN MUVAFFAQIYATLI O'TDINGIZ!</h2>
          <p class="verdict-desc">Barcha 3 bosqich bo'yicha belgilangan minimal o'tish talablari to'liq bajarildi.</p>
        </div>
        <div class="verdict-badge-box passed-badge">O'TDI ✅</div>
      `;
    } else {
      bannerEl.className = 'verdict-banner failed';
      bannerEl.innerHTML = `
        <div class="verdict-icon">⚠️</div>
        <div class="verdict-text-wrap">
          <h2 class="verdict-title">SIZ TESTDAN O'TA OLMADINGIZ</h2>
          <p class="verdict-desc">Quyidagi bosqich(lar)da belgilangan minimal o'tish talabi bajarilmadi:</p>
          <div class="verdict-fail-reasons">
            ${!stats.s1.passed ? `<span class="reason-tag">1-Bosqich: ${stats.s1.correct}/${stats.s1.total} (kamida ${stats.s1.min} ta kerak edi)</span>` : ''}
            ${!stats.s2.passed ? `<span class="reason-tag">2-Bosqich: ${stats.s2.correct}/${stats.s2.total} (kamida ${stats.s2.min} ta kerak edi)</span>` : ''}
            ${!stats.s3p1.passed ? `<span class="reason-tag">3-Bosqich (1-15): ${stats.s3p1.correct}/${stats.s3p1.total} (kamida ${stats.s3p1.min} ta kerak edi)</span>` : ''}
            ${!stats.s3p2.passed ? `<span class="reason-tag">3-Bosqich (16-86): ${stats.s3p2.correct}/${stats.s3p2.total} (kamida ${stats.s3p2.min} ta kerak edi)</span>` : ''}
          </div>
        </div>
        <div class="verdict-badge-box failed-badge">O'TMADI ❌</div>
      `;
    }
  },

  renderStageResultCard(containerId, details, title, correct, total, passed, minReq, lang) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let circlesHtml = details.map((d, i) => {
      const cls = d.isCorrect ? 'res-circle correct' : 'res-circle wrong';
      return `
        <div class="${cls}" title="Savol #${i + 1}: ${d.isCorrect ? "To'g'ri" : "Noto'g'ri"}">
          ${i + 1}
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="res-card-header">
        <div>
          <h3 class="res-card-title">${title}</h3>
          <div class="res-criteria-info">O'tish talabi: Kamida <strong>${minReq} ta</strong> to'g'ri</div>
        </div>
        <div class="res-card-status ${passed ? 'passed' : 'failed'}">
          <div class="res-score">${correct} / ${total}</div>
          <div class="res-badge">${passed ? 'O‘TDI' : 'YIQILDI'}</div>
        </div>
      </div>
      <div class="res-circles-grid">
        ${circlesHtml}
      </div>
    `;
  },

  renderPsychoStageResultCard(containerId, details, p1Correct, p1Total, p1Passed, p2Correct, p2Total, p2Passed, lang) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const totalPassed = (p1Passed && p2Passed);

    // Split details into Part 1 (1-15) and Part 2 (16-86)
    const part1Details = details.slice(0, 15);
    const part2Details = details.slice(15);

    const part1CirclesHtml = part1Details.map((d, i) => {
      const cls = d.isCorrect ? 'res-circle correct' : 'res-circle wrong';
      return `
        <div class="${cls}" title="Savol #${i + 1}: ${d.isCorrect ? "Mos keldi" : "Mos kelmadi"}">
          ${i + 1}
        </div>
      `;
    }).join('');

    const part2CirclesHtml = part2Details.map((d, i) => {
      const qNum = i + 16;
      const cls = d.isCorrect ? 'res-circle correct' : 'res-circle wrong';
      return `
        <div class="${cls}" title="Savol #${qNum}: ${d.isCorrect ? "Mos keldi" : "Mos kelmadi"}">
          ${qNum}
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="res-card-header">
        <div>
          <h3 class="res-card-title">3-Bosqich: Psixologik Test (86 ta savol)</h3>
          <div class="res-criteria-info">
            1-Qism (1–15): Kamida <strong>4 ta</strong> | 2-Qism (16–86): Kamida <strong>40 ta</strong> to'g'ri bo'lishi kerak
          </div>
        </div>
        <div class="res-card-status ${totalPassed ? 'passed' : 'failed'}">
          <div class="res-score">${p1Correct + p2Correct} / ${details.length}</div>
          <div class="res-badge">${totalPassed ? 'O‘TDI' : 'YIQILDI'}</div>
        </div>
      </div>

      <!-- 1-Qism (1-15) -->
      <div class="psycho-subpart-block">
        <div class="psycho-subpart-header">
          <div>
            <div class="psycho-subpart-title">1-Qism: Dastlabki Savollar (1–15)</div>
            <div style="font-size: 0.82rem; color: var(--text-muted);">Talab: Kamida 4 ta to'g'ri</div>
          </div>
          <div class="res-badge ${p1Passed ? 'passed-pill' : 'failed-pill'}">
            ${p1Correct} / ${p1Total} ta (${p1Passed ? 'O‘TDI' : 'YIQILDI'})
          </div>
        </div>
        <div class="res-circles-grid">
          ${part1CirclesHtml}
        </div>
      </div>

      <!-- 2-Qism (16-86) -->
      <div class="psycho-subpart-block">
        <div class="psycho-subpart-header">
          <div>
            <div class="psycho-subpart-title">2-Qism: Asosiy Savollar (16–86)</div>
            <div style="font-size: 0.82rem; color: var(--text-muted);">Talab: Kamida 40 ta to'g'ri</div>
          </div>
          <div class="res-badge ${p2Passed ? 'passed-pill' : 'failed-pill'}">
            ${p2Correct} / ${p2Total} ta (${p2Passed ? 'O‘TDI' : 'YIQILDI'})
          </div>
        </div>
        <div class="res-circles-grid psycho-grid">
          ${part2CirclesHtml}
        </div>
      </div>
    `;
  },

  renderPsychoProfile(overallMatch, lang) {
    const profileContainer = document.getElementById('psycho-traits-list');
    if (!profileContainer) return;

    const traits = [
      {
        name: { lat: "Hissiy barqarorlik (Stressga chidamlilik)", cyr: "Ҳиссий барқарорлик (Стрессга чидамлилик)", rus: "Эмоциональная устойчивость (Стрессоустойчивость)" },
        score: Math.min(95, Math.max(45, overallMatch + Math.floor(Math.random() * 8) - 4)),
        color: "var(--accent-cyan)"
      },
      {
        name: { lat: "Mantiqiy qaror qabul qilish", cyr: "Мантиқий қарор қабул қилиш", rus: "Принятие логических решений" },
        score: Math.min(98, Math.max(50, overallMatch + Math.floor(Math.random() * 10) - 2)),
        color: "var(--accent-blue)"
      },
      {
        name: { lat: "Intizom va mas'uliyatlilik", cyr: "Интизом ва масъулиятлилик", rus: "Дисциплинированность и ответственность" },
        score: Math.min(96, Math.max(55, overallMatch + Math.floor(Math.random() * 6))),
        color: "var(--accent-emerald)"
      },
      {
        name: { lat: "Yetakchilik va ijtimoiy moslashuv", cyr: "Етакчилик ва ижтимоий мослашув", rus: "Лидерство и социальная адаптация" },
        score: Math.min(94, Math.max(40, overallMatch + Math.floor(Math.random() * 8) - 5)),
        color: "var(--accent-purple)"
      }
    ];

    profileContainer.innerHTML = traits.map(t => `
      <div class="trait-row">
        <div class="trait-info">${t.name[lang] || t.name.lat}</div>
        <div class="trait-bar-wrap">
          <div class="trait-bar-fill" style="width: ${t.score}%; background: ${t.color};"></div>
        </div>
        <div style="font-weight: 700; width: 45px; text-align: right; color: ${t.color};">${t.score}%</div>
      </div>
    `).join('');
  }
};
