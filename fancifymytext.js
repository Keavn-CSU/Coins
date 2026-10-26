function hello() {
    alert("Entrophy!");
}

function largerFont() {
	hello();
	document.getElementById("text-input").style.fontSize = "24pt";
}

function mooing() {

    document.getElementById("text-input").value = document.getElementById("text-input").value.toUpperCase();
	var text = document.getElementById("text-input").value;
	var parts = text.split(".");

	for (var i = 0; i < parts.length; i++) {
		text = parts.join("-Moo.");
	}

    document.getElementById("text-input").value = text;

}

function applyTextStyle() {
	const textInput = document.getElementById("text-input");
	const fancy = document.getElementById("fancy-shmancy");

	hello();

	if (fancy.checked) {
		textInput.style.fontWeight = "bold";
		textInput.style.color = "blue";
		textInput.style.textDecoration = "underline";
	} else {
		textInput.style.fontWeight = "normal";
		textInput.style.color = "black";
		textInput.style.textDecoration = "none";
	}
}
