var elBtn = document.querySelector(".header__button--mode");
var elBody = document.querySelector(".header");
var mainSection = document.querySelector(".main__section");
var productSection = document.querySelector(".product");
var thirdSection = document.querySelector(".third");

elBtn.addEventListener("click", function () {
  elBody.classList.toggle("dark");
  mainSection.classList.toggle("dark");
  productSection.classList.toggle("dark");
  thirdSection.classList.toggle("dark");
  productSection.style.backgroundImage = "none";
  console.log("hello");
});
