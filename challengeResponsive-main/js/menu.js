const burgerMenu = document.querySelector('#burger__menu');
const menuModal = document.querySelector('#menu__content');

burgerMenu.addEventListener('click',() => {
    menuModal.classList.toggle('active');
});
menuModal.addEventListener("click", () => {
    menuModal.classList.toggle("active");
});