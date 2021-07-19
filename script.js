alert("Hello");
const toggle = document.querySelector(".toggle");
const toggleBtn = document.querySelector(".toggle_btn");



toggle.addEventListener("click", (e) => {
    toggleBtn.classList.toggle("night-mode");
});