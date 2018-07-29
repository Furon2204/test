function myFirstApp(name, age) {
	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkils() {
		let skills = ['html', 'css', 'php', 'mySQL', 'photoshop'];

		for (let i = 0; i < skills.length; i++) {
			document.write("Я владею " + skills[i] + "<br>");
		}
	};
	showSkils();

	function checkAge() {
		if (age > 18) {
			alert("Я уверен на 100%, что тебе больше 18 лет!", "");
		} else {
			alert("Я уверен на 100%, что тебе нет 18 лет!", "");
		}
	};

	checkAge();

	function calcPow(num) {
		console.log(num * num);
	};
	calcPow(4);
};

myFirstApp("Roman", 26);