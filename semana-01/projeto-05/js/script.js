const fontControl = document.getElementById("fontControl");
const fontValue = document.getElementById("fontValue");

fontControl.addEventListener("input", () => {
  const newSize = fontControl.value + "px";
  document.documentElement.style.fontSize = newSize;
  fontValue.textContent = newSize;
});