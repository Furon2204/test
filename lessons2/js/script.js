let chooseBtn = document.getElementById('choose'),
	receiveBtn = document.getElementById('receive'),
	heading = document.getElementsByTagName('h2')[0],
	nameInput = document.getElementsByClassName('contactform_name')[0],
	phoneInput = document.querySelector('.contactform_phone'),
	mailInput = document.querySelectorAll('.contactform_mail')[0],
	modal = document.querySelector('.modal'),
	close = document.querySelector('.close'),
	text = document.getElementsByName('message')[0];

function hover() {
	heading.textContent = "Действительно всё!";
};

function hoverclick() {
	heading.textContent = "Ты нажал сюда один раз";
};

heading.addEventListener("mouseenter", hover);
heading.addEventListener("mouseleave", function() {
	heading.textContent = "Всё включено!";
});
heading.addEventListener("click", hoverclick);
heading.addEventListener("dblclick", function() {
	heading.textContent = "Ты нажал сюда два раза!";
});

receive.addEventListener('click', function() {
	modal.style.display = "block";
});

close.addEventListener('click', function() {
	modal.style.display = "none";
});

console.log(modal);
console.log(close);

nameInput.addEventListener('input', function() {
	text.value = "Меня звоут " + nameInput.value + ". И я хочу спросить: ";
	if (nameInput.value == "") {
		text.value = "";
	}
});