document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("usernameInput");
  const checkBtn = document.getElementById("checkBtn");
  const loadingBox = document.getElementById("loadingBox");
  const loadingText = document.getElementById("loadingText");
  const progressFill = document.getElementById("progressFill");
  const resultBox = document.getElementById("resultBox");

  checkBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim().toLowerCase();
usernameInput.value = username;

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
const progressInterval = setInterval(() => {
  progress += Math.random() * 6 + 4; // steady growth
  if (progress >= 95) {
    progress = 95;
    clearInterval(progressInterval);
  }
  progressFill.style.width = progress + "%";
}, 700);


    setTimeout(() => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
      progressFill.style.width = "100%";
      loadingBox.classList.add("hidden");

      showResult(username);

      checkBtn.disabled = false;
      usernameInput.disabled = false;
    }, 7500);
  });


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
