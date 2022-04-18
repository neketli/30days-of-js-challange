const secondsArrow = document.querySelector('.s-arrow');
const minutesArrow = document.querySelector('.m-arrow');
const hoursArrow = document.querySelector('.h-arrow');

const setDate = () => {
	const now = new Date();
	const s = (now.getSeconds() / 60) * 360 + 90;
	const m = (now.getMinutes() / 60) * 360 + 90;
	const h = (now.getMinutes() / 12) * 360 + 90;
	
	secondsArrow.style.transform = `rotate(${s}deg)`;
	minutesArrow.style.transform = `rotate(${m}deg)`;
	hoursArrow.style.transform = `rotate(${h}deg)`;
}

setInterval(setDate, 1000);