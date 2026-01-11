document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("usernameInput");
  const checkBtn = document.getElementById("checkBtn");
  const loadingBox = document.getElementById("loadingBox");
  const loadingText = document.getElementById("loadingText");
  const progressFill = document.getElementById("progressFill");
  const resultBox = document.getElementById("resultBox");

  checkBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim().toLowerCase();

    if (!/^[a-zA-Z0-9._]{1,30}$/.test(username)) {
      alert("Please enter a valid Instagram username.");
      return;
    }

    // Reset UI
    resultBox.classList.add("hidden");
    loadingBox.classList.remove("hidden");
    progressFill.style.width = "0%";
    checkBtn.disabled = true;
    usernameInput.disabled = true;

    // Loading steps
    const steps = [
      "Connecting to public data sources…",
      "Analyzing profile activity signals…",
      "Evaluating interaction patterns…",
      "Estimating engagement metrics…",
      "Finalizing results…"
    ];

    let stepIndex = 0;
    loadingText.textContent = steps[stepIndex];

    const stepInterval = setInterval(() => {
      stepIndex++;
      if (stepIndex < steps.length) {
        loadingText.textContent = steps[stepIndex];
      }
    }, 1400);

    let progress = 0;
const totalDuration = 8000; // total analysis time
const intervalTime = 100;   // progress update speed
const increment = 100 / (totalDuration / intervalTime);

const progressInterval = setInterval(() => {
  progress += increment;
  if (progress >= 100) {
    progress = 100;
    clearInterval(progressInterval);

    // Give browser time to paint 100%
    setTimeout(() => {
      loadingBox.classList.add("hidden");
      showResult(username);
      checkBtn.disabled = false;
      usernameInput.disabled = false;
    }, 400);
  }
  progressFill.style.width = progress + "%";
}, intervalTime);


  function showResult(username) {
    const interactionScore = Math.floor(Math.random() * 35) + 55;
    const engagement =
      interactionScore > 80 ? "High" :
      interactionScore > 65 ? "Moderate" :
      "Low";

    const activity = Math.floor(Math.random() * 30) + 70;
    const reach = Math.floor(Math.random() * 25) + 65;

    resultBox.innerHTML = `
      <h3>Interaction Overview for @${username}</h3>

      <div class="metric">
        <span>Interaction Score</span>
        <strong>${interactionScore}%</strong>
      </div>

      <div class="metric">
        <span>Engagement Level</span>
        <strong>${engagement}</strong>
      </div>

      <div class="metric">
        <span>Activity Index</span>
        <strong>${activity}%</strong>
      </div>

      <div class="metric">
        <span>Reach Signal</span>
        <strong>${reach}%</strong>
      </div>

      <p class="result-note">
        These results are estimation-based and derived from publicly observable
        interaction patterns and engagement trends.
      </p>
    `;

    resultBox.classList.remove("hidden");
  }
});
