export const initNav = () => {
    const body = document.querySelector('body');
    // Меню
    const menu = document.querySelector('.menu');
    const menuButton = document.querySelector('.btn__menu');

    const mobileMenu = document.querySelector('.mobile-menu')
    const mobileMenuButton = document.querySelector('.btn__menu--mobile')

    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    const menuLinks = document.querySelectorAll('.menu a');

    // menuButton.addEventListener('click', e => {
    //     menuButton.classList.toggle('active');
    //     menu.classList.toggle('is-active');
    //     // body.classList.toggle('lock');
    //     console.log('клик')
    // });

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', (evt) => {
            evt.preventDefault();
            menuButton.classList.remove('active');
            menu.classList.remove('is-active');
            body.classList.remove('lock');
        });
    });
    mobileMenuButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        mobileMenuButton.classList.toggle('active');
        mobileMenu.classList.toggle('is-active');
        // body.classList
    })


    menuLinks.forEach(link => {
        link.addEventListener('click', (evt) => {
            evt.preventDefault();
            menuButton.classList.remove('active');
            menu.classList.remove('is-active');
            body.classList.remove('lock');
        });
    });

  

}