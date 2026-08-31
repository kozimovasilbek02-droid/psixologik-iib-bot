class TestTimer {
  constructor(displayElementId, onTimeUpCallback, warningSeconds = 60) {
    this.displayEl = document.getElementById(displayElementId);
    this.onTimeUp = onTimeUpCallback;
    this.warningSeconds = warningSeconds;
    this.totalSeconds = 0;
    this.remainingSeconds = 0;
    this.timerInterval = null;
  }

  start(seconds) {
    this.stop();
    this.totalSeconds = seconds;
    this.remainingSeconds = seconds;
    this.updateDisplay();

    this.timerInterval = setInterval(() => {
      this.remainingSeconds--;
      this.updateDisplay();

      if (this.remainingSeconds <= 0) {
        this.stop();
        if (typeof this.onTimeUp === 'function') {
          this.onTimeUp();
        }
      }
    }, 1000);
  }

  stop() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  getElapsedSeconds() {
    return this.totalSeconds - this.remainingSeconds;
  }

  updateDisplay() {
    if (!this.displayEl) return;

    const minutes = Math.floor(this.remainingSeconds / 60);
    const secs = this.remainingSeconds % 60;
    const formatted = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    
    this.displayEl.textContent = formatted;

    const widget = this.displayEl.closest('.timer-widget');
    if (widget) {
      if (this.remainingSeconds <= this.warningSeconds && this.remainingSeconds > 0) {
        widget.classList.add('warning');
      } else {
        widget.classList.remove('warning');
      }
    }
  }
}
