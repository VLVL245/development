"use strict"

//Меню burger=========================================================================================================

window.onload = function () {
	adaptiveHeader();
}

window.addEventListener('resize', function () {
	adaptiveHeader();
});

function adaptiveHeader() {
	let factWidth = window.innerWidth;
	const headerBurger = document.querySelector('.header-menu__icon');
	let headerMenuBurger = document.querySelector('.header-menu');
	let menuBody = document.querySelector('.menu__body');
	let menu = document.querySelector('.menu__list');
	if (factWidth <= 767.98) {
		if (!menu.classList.contains('done')) {
			menu.classList.add('done');
			[menu].forEach(element => {
				headerMenuBurger.insertAdjacentElement('beforeend', element);
			});
		}
	} else if (factWidth > 767.98) {
		headerMenuBurger.classList.remove('_active');
		headerBurger.classList.remove('_active');
		if (menu.classList.contains('done')) {
			menu.classList.remove('done');
			[menu].forEach(element => {
				menuBody.insertAdjacentElement('afterbegin', element);
			});
		}
	}
}

const headerMenuList = document.querySelector('.menu__list');
const headerMenuBurger = document.querySelector('.header-menu');
const headerBurger = document.querySelector('.header-menu__icon');
if (headerBurger) {
	headerBurger.addEventListener("click", function (element) {
		headerBurger.classList.toggle('_active');
		headerMenuBurger.classList.toggle('_active');
		if (headerMenuBurger.classList.contains('_active')) {
			scrollStop();
		} else {
			scrollActive();
		}
	});
	headerMenuList.addEventListener("click", function (element) {
		headerBurger.classList.remove('_active');
		headerMenuBurger.classList.remove('_active');
		if (headerMenuBurger.classList.contains('_active')) {
			scrollStop();
		} else {
			scrollActive();
		}
	});
}

function scrollStop() {
	document.body.classList.add("stop-scrolling");
}
function scrollActive() {
	document.body.classList.remove("stop-scrolling");
}

//======================================================================================================================

// ibg cod=============================================================================================================

function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(\'' + ibg[i].querySelector('img').getAttribute('src') + '\')';
		}
	}
}
ibg();

//================================================================================================================


const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
});

let up = document.querySelector('.home');
document.addEventListener('scroll', function () {
	if (window.pageYOffset >= 800) {
		up.classList.add('fixed');
	}
	else {
		up.classList.remove('fixed');
	}
});