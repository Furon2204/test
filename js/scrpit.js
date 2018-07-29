let answers = [],
	queestions = [
	"Как ваше имя?",
	"Как ваша фамилия?",
	"Сколько вам лет?"
	];

for (let i = 0; i < queestions.length; i++)	{
	answers[i] = prompt(queestions[i])
}

//document.write(answers);

let age = answers[2];

if (age > 18) {
	alert("Вы можете войти!", "");
} else {
	alert("Рановато ещё!", "");
}

function testfunc(obj) {
	document.write("Test " + obj + "!");
};

testfunc("script");
testfunc("site");

function calc(a,b) {
	console.log(a + b);
};

calc(4,5);
calc("Misha", "Anna");
calc(10, "kate");