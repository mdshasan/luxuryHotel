'use strict';
const backToTop= document.querySelector('.to-top');
const topNav=document.querySelector('.top-nav');
const logo= document.querySelector('.logo');
const anchor=document.querySelector('.anchor')
window.addEventListener('scroll', function (){
	if (window.scrollY >100) {
backToTop.classList.add('active');
	} else{
		backToTop.classList.remove('active');
	}
});

window.addEventListener('scroll',function(){
	if (window.scrollY > 50) {
     topNav.classList.add('sticky');
	} else{
		topNav.classList.remove('sticky');
	}
}) 


const slide= document.querySelectorAll('.slide');
const next=document.querySelector('#next');
const prev= document.querySelector('#prev');
const auto=true;
const intervalTIme= 5000;
let slideInterval;

const nextSlide=()=> {
	const current= document.querySelector('.current');
	current.classList.remove('current');

	if (current.nextElementSibling) {
	current.nextElementSibling.classList.add('current');
   
   } else{
   	slide[0].classList.add('current');
   }
   setTimeout(()=>current.classList.remove('current'));
}

const prevSlide= () => {
	const current= document.querySelector('.current');
	current.classList.remove('current');
	if (current.previousElementSibling) {
	current.previousElementSibling.classList.add('current');
   
   } else{
   	slide[slide.length - 1].classList.add('current');
   }
   setTimeout(()=>current.classList.remove('current'));
}

 next.addEventListener('click', e => {
	
	nextSlide();
	if (auto) {
		clearInterval(slideInterval);
		slideInterval= setInterval(nextSlide,intervalTIme);
	}
});

prev.addEventListener('click', e => {
	prevSlide();
	if (auto) {
		clearInterval(slideInterval);
		slideInterval= setInterval(prevSlide,intervalTIme);
	}
});

if (auto) {
	slideInterval= setInterval(nextSlide, intervalTIme);
}


// const menuBar= document.querySelector('.menu-bar');
// const times=document.querySelector('.times');
// menuBar.addEventListener('click',toggleMenu);
// times.addEventListener('click',toggleMenu);

// function toggleMenu(){
// 	const navBar= document.querySelector('.menu');
// 	navBar.classList.toggle('menu-active');

//}