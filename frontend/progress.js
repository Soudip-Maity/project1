const htmlBtn = document.getElementById("htmlBtn");
const cssBtn = document.getElementById("cssBtn");
const jsBtn = document.getElementById("jsBtn");
const progressBar = document.getElementById("progressBar");

let progress = 0;

function updateProgress(increment) {
  if (progress + increment <= 3) {
    progress += increment;
    progressBar.value = progress;
  }
  if (progress + increment == 2) {
    window.alert("start css");
  }
  if (progress + increment == 3) {
    window.alert("start javascript");
  }
  if (progress + increment == 4) {
    window.alert("start any frame work");
  }
}

htmlBtn.addEventListener("click", () => updateProgress(1));
cssBtn.addEventListener("click", () => updateProgress(1));
jsBtn.addEventListener("click", () => updateProgress(1));
