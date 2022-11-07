const icon = document.querySelector('.header__icon');
const menu = document.querySelector('.header__menu')
if (icon) {
	icon.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		icon.classList.toggle('_active');
		menu.classList.toggle('_active');
	});
}
/*---------------------------------------*/
ScrollReveal({
	resert: true,
	distance: '20px',
	duration: 2500,
	delay: 200,
});
ScrollReveal().reveal('.cover__title, .header-block__title, .header-block__subtitle, .cover__button', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.mini__body', { delay: 800, origin: 'left' });
ScrollReveal().reveal('.item-cover, .item-work', { delay: 900, origin: 'bottom', inteval: 800 });
ScrollReveal().reveal('.bckg__image, .build__image, .goal__image, .footer__logo', { delay: 650, origin: 'right' });
ScrollReveal().reveal('.text-block', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.item-row,.menu-nav__item', { delay: 900, origin: 'top', inteval: 800 });


