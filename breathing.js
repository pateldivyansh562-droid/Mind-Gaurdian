document.addEventListener("DOMContentLoaded", () => {

  const circle = document.getElementById("breathing-circle");
  const text = document.getElementById("breath-text");
  const timer = document.getElementById("breath-timer");
  const startBtn = document.getElementById("breath-start");
  const resetBtn = document.getElementById("breath-reset");

  if (!circle || !startBtn || !resetBtn) return;

  let cycleTimeout;
  let countdownInterval;
  let running = false;

  // Breath phases with duration & circle scale
  const phases = [
    { label: "Inhale", time: 4, scale: 1.3 },
    { label: "Hold", time: 4, scale: 1.3 },
    { label: "Exhale", time: 4, scale: 0.9 },
    { label: "Hold", time: 2, scale: 0.9 }
  ];

  function startCountdown(seconds) {
    timer.innerText = seconds;

    countdownInterval = setInterval(() => {
      seconds--;
      timer.innerText = seconds;

      if (seconds <= 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);
  }

  function startBreathing() {
    if (running) return;
    running = true;

    let index = 0;

    function runPhase() {
      const phase = phases[index];

      // Change label & animation scale
      text.innerText = phase.label;
      circle.style.transform = `scale(${phase.scale})`;

      // Start countdown
      clearInterval(countdownInterval);
      startCountdown(phase.time);

      // Move to next phase after duration
      cycleTimeout = setTimeout(() => {
        index = (index + 1) % phases.length;
        runPhase();
      }, phase.time * 1000);
    }

    runPhase();
  }

  function resetBreathing() {
    running = false;
    clearTimeout(cycleTimeout);
    clearInterval(countdownInterval);

    text.innerText = "Press Start";
    timer.innerText = "0";
    circle.style.transform = "scale(1)";
  }

  startBtn.addEventListener("click", startBreathing);
  resetBtn.addEventListener("click", resetBreathing);

});
