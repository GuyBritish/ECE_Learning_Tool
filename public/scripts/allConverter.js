const resultText = document.getElementById("result");
const copyBtn = document.getElementById("copyToClipboard");
const resetBtn = document.getElementById("resetBtn");
const inputTxt = document.getElementsByClassName("inpText")[0];

//=================================================================================================

copyBtn.addEventListener("click", function (event) {
	resultText.select();
	document.execCommand("copy");
	if (window.getSelection) {
		window.getSelection().removeAllRanges();
	} else if (document.selection) {
		document.selection.empty();
	}
});

resetBtn.addEventListener("click", function (event) {
	resultText.innerHTML = "";
	inputTxt.focus();
});

inputTxt.addEventListener("keydown", function (event) {
	key = event.key.charCodeAt(0);
	console.log(key);
	if ((key >= 48 && key <= 57) || (key >= 65 && key <= 90) || (key >= 97 && key <= 122)) {
		// do something
	} else {
		event.preventDefault();
	}
});
