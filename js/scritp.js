const btnHamburger = document.getElementById("hamburgerButton");
const navigation = document.getElementById("navigationInHeader");

btnHamburger.addEventListener("click", (e) => {
  navigation.classList.toggle("hidden");
});

const linksNavigation = [...document.querySelectorAll(".nav__link")];

linksNavigation.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navigation.classList.add("hidden");
  });
});

(function dateNow(){
  const date = document.querySelector('.footer__date')
  const fecha = new Date()
  date.textContent = fecha.getFullYear()
})()
