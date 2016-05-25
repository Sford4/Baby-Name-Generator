var boyNames = [
	"Juan",
	"James",
	"Billy Bob",
	"Jorge",
	"Raul"
];

var boyMiddle = [
	"Megatron",
	"Superfightingrobot",
	"Danger",
	"Procrastination",
	"Godzilla"
];

var girlNames = [
	"Mercedes",
	"Chevrolet",
	"Honda",
	"Suzuki",
	"Harley"
];

var girlMiddle = [
	"Xenawarriorprincess",
	"Anne",
	"Marie",
	"Lynn",
	"Funfunmagiggles"
];




function getBoyName(lastName) {
	var rand1 = Math.floor(Math.random() * boyNames.length);
	var rand2 = Math.floor(Math.random() * boyMiddle.length);
	$("#baby-name").text(boyNames[rand1] + " " + boyMiddle[rand2] + " " + lastName);
	console.log(lastName);
};

function getGirlName(lastName) {
	var rand3 = Math.floor(Math.random() * girlNames.length);
	var rand4 = Math.floor(Math.random() * girlMiddle.length);
	$("#baby-name").text(girlNames[rand3] + " " + girlMiddle[rand4] + " " + lastName);
	console.log(lastName);
};


function getName () {
	var yourName = document.getElementById('your-name').value; 
	var isBoy = document.getElementById("boyButton").checked;
	var isGirl = document.getElementById("girlButton").checked;
	if (!yourName) {
		alert("You forgot the poor kid's last name!");
		return;
	}
	if (isBoy === true) {
		getBoyName(yourName);
	}
	else if (isGirl === true) {
		getGirlName(yourName);
	}
	else {
		alert("Why didn't you choose boy or girl?  \nYou want a hybrid or something?");
	}
};


$('#generate-name').click(function() {
	getName();
});

function radioAction(color) {
	if (!$('body').hasClass(color)) {
		$('body').attr('class', color);
	}
}



