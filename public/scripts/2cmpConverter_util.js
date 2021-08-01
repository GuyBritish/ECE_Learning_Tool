const resultText1 = document.getElementById("result");
const copyBtn1 = document.getElementById("copyToClipboard1");
const resetBtn1 = document.getElementById("resetBtn1");
const inputTxt1 = document.getElementsById("decNum");

const resultText2 = document.getElementById("result");
const copyBtn2 = document.getElementById("copyToClipboard2");
const resetBtn2 = document.getElementById("resetBtn2");
const inputTxt2 = document.getElementsById("2cmpNum");

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

copyBtn1.addEventListener("click", function (event) {
	copyText(resultText1);
});

resetBtn1.addEventListener("click", function (event) {
	clearText(resultText1, inputTxt1);
});

copyBtn2.addEventListener("click", function (event) {
	copyText(resultText2);
});

resetBtn2.addEventListener("click", function (event) {
	clearText(resultText2, inputTxt2);
});

inputTxt1.addEventListener("keydown", function (event) {
	if (!restrictInp(event.key.charCodeAt(0))) {
		event.preventDefault();
	}
});

inputTxt2.addEventListener("keydown", function (event) {
	if (!restrictInp(event.key.charCodeAt(0))) {
		event.preventDefault();
	}
});