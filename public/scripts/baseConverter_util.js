const resultText = document.getElementById("result");
const copyBtn = document.getElementById("copyToClipboard");
const resetBtn = document.getElementById("resetBtn");
const inputTxt = document.getElementById("fromNum");

//=================================================================================================

function copyText(txtArea) {
	txtArea.select();
	document.execCommand("copy");
	if (window.getSelection) {
		window.getSelection().removeAllRanges();
	} else if (document.selection) {
		document.selection.empty();
	}
}

function clearText(txtArea, inpArea) {
	txtArea.innerHTML = "";
	inpArea.focus();
}

function restrictInp(key) {
	if ((key >= 48 && key <= 57) || (key >= 65 && key <= 90) || (key >= 97 && key <= 122)) {
		return true;
	} else {
		return false;
	}
}

copyBtn.addEventListener("click", function (event) {
	copyText(resultText);
});

resetBtn.addEventListener("click", function (event) {
	clearText(resultText, inputTxt);
});

inputTxt.addEventListener("keydown", function (event) {
	if (!restrictInp(event.key.charCodeAt(0))) {
		event.preventDefault();
	}
});
