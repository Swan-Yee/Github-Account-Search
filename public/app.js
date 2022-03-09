"use strict";

// varible
let root = document.documentElement;
let btnMode = document.getElementById("btn-mode");

let darkMode = false;

btnMode.addEventListener("click", function () {
  if (darkMode == false) {
    root.classList.add("dark");
    darkMode = true;
  } else {
    root.classList.remove("dark");
    darkMode = false;
  }
});

window.onload = function () {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
};
