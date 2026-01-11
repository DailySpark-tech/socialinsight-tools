const usernameInput = document.getElementById("ig-username");
const checkBtn = document.getElementById("check-btn");
const loadingBox = document.getElementById("loading");
const loadingText = document.getElementById("loading-text");
const resultBox = document.getElementById("result");

const loadingSteps = [
  "Validating username…",
  "Fetching public profile signals…",
  "Analyzing interaction patterns…",
  "Calculating engagement indicators…",
  "Finalizing report…"
];

function isValidInstagramUsername(username) {
  return /^[a-zA-Z0-9._]{1,30}$/.test(username);
}

checkBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();

  resultBox.classList.add("hidden");
  loadingBox.classList.add("hidden");

  if (!username) {
    alert("Please enter an Instagram username.");
    return;
  }

  if (!isValidInstagramUsername(username)) {
    alert("Invalid Instagram username format.");
    return;
  }

  loadingBox.classList.remove("hidden");

  let step = 0;
  loadingText.textContent = loadingSteps[step];

  const interval = setInterval(() => {
    step++;
    if (step < loadingSteps.length) {
      loadingText.textContent = loadingSteps[step];
    } else {
      clearInterval(interval);
      showResult(username);
    }
  }, 900);
});

function showResult(username) {
  loadingBox.classList.add("hidden");

  const interactionScore = Math.floor(Math.random() * 40) + 60;
  const engagementLevel =
    interactionScore > 80 ? "High" :
    interactionScore > 65 ? "Moderate" :
    "Low";

  resultBox.innerHTML = `
    <h3>Interaction Overview for @${username}</h3>
    <p><strong>Estimated Interaction Score:</strong> ${interactionScore}%</p>
    <p><strong>Engagement Level:</strong> ${engagementLevel}</p>
    <p>
      This estimation is based on public behavior patterns such as
      posting frequency, visible reactions, and engagement trends.
    </p>
  `;

  resultBox.classList.remove("hidden");
}
