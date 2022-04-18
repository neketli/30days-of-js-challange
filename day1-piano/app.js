window.addEventListener('keydown', (e) => {
	const audio = document.querySelector(`.${e.key.toLowerCase()}`);
	const key = document.querySelector(`#${e.key.toLowerCase()}`);
	if (!audio) return;
	audio.play();
	key.classList.add('active-white');
})


const keys = document.querySelectorAll('.piano__note-white');
keys.forEach(k => k.addEventListener('transitionend', function (e) {
	if (e.propertyName !== 'background-color') return;
	this.classList.remove('active-white');
}));
keys.forEach(k => k.addEventListener('click', function (e) {
	const audio = document.querySelector(`.${e.target.id}`);
	const key = document.querySelector(`#${e.target.id}`);
	if (!audio) return;
	audio.play();
	key.classList.add('active-white');
}));