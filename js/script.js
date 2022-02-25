document.querySelector(".ball").addEventListener("click", (e) => {
  e.target.classList.toggle("ball-move");
  bodyColor.classList.toggle("dark");
});
const bodyColor = document.querySelector(".img-card");
// document.body.classList.toggle("body");
document.querySelector(".ball-2").addEventListener("click", (e) => {
  e.target.classList.toggle("ball-move");
  bodyColor.classList.toggle("light");
});
