const IGNORED_DOMAINS = ["gimkit.com"];
// const INITIAL_DELAY = 60 * 1000;
const EVALUATION_INTERVAL = 8000;

// Type the special word to toggle this utilties
const dayOfMonth = (new Date().getDate()) % 10;
const MAGIC = "co0mm"+dayOfMonth;
let combo = 0;

let keyCounts = {};
let timerId;
let minecraftDetectionThreshold = 40; // Adjust this threshold as needed

let enabled = true;

function summarizeKeyEvents() {
  let minecraftDetected = false;

  if (enabled) {
    let gameKeyPressed = 0;
    for (const key of ["w", "s", "a", "d", "space"]) {
      gameKeyPressed += (keyCounts[key] || 0);
    }
    for (const key of ["ArrowLeft", "ArrowRight"]) {
      // penalize these arrow keys 50% more than other keys
      gameKeyPressed += Math.floor((keyCounts[key] || 0) * 1.5);
    }

    if (gameKeyPressed > minecraftDetectionThreshold) {
      minecraftDetected = true;
    }

    // console.log("score" + gameKeyPressed);
    // console.log(keyCounts);

    if (minecraftDetected) {
      console.log("Fatal Error: video buffer overflow!");
      window.location.reload();
    }
  }

  // Reset keyCounts for every new evaluation interval
  keyCounts = {};
  timerId = setTimeout(summarizeKeyEvents, EVALUATION_INTERVAL);
}

// setTimeout(() => {
if (!IGNORED_DOMAINS.some(domain => new URL(window.location.href).hostname.endsWith(domain))) {
  document.addEventListener('keydown', (event) => {
    const key = event.key;
    keyCounts[key] = (keyCounts[key] || 0) + 1;
  });

  document.addEventListener('keyup', (event) => {
    const key = event.key;
    keyCounts[key] = (keyCounts[key] || 0) + 1;
  });

  document.addEventListener('keypress', (event) => {
    const key = event.key;
    keyCounts[key] = (keyCounts[key] || 0) + 1;

    if (key == MAGIC[combo]) {
      combo++;
    } else {
      combo = 0;
    }
    if (combo === MAGIC.length) {
      enabled = !enabled;
      console.log(">>> " + enabled)
      combo = 0;
    }
  });

  summarizeKeyEvents();
}
// }, INITIAL_DELAY); // Delay the game activity detection
