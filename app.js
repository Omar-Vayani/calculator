const equal = document.querySelector(".equal");
const btns = document.querySelectorAll(".btn");
const display = document.querySelector(".display");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText != "=") {
      display.value =
        display.value == "Syntax Error"
          ? ""
          : (display.value = display.value += btn.getAttribute("val"));
    } else {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Syntax Error";
      }
    }
  });
});
window.addEventListener("keypress", (e) => {
  e.key == "Enter" ? equal.click() : null;
});
