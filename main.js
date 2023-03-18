const toggleBtn = document.querySelector('.toggleBtn');
const menu = document.querySelector('.navBar-menu-text');
const icons = document.querySelector('.navBar-icons')

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    icons.classList.toggle('active')
})