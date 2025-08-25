

const menuBtn = document.querySelector('.bar');
const navMenu = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    menuBtn.innerHTML = navMenu.classList.contains('show') ? 
        '<i class="fa-solid fa-times"></i>' : 
        '<i class="fa-solid fa-bars"></i>';
});
 