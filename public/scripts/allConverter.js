const resultText = document.getElementById("result");
const copyBtn = document.getElementById("copyToClipboard");

copyBtn.addEventListener("click", function (event) {
	event.preventDefault();
	resultText.select();
	document.execCommand("copy");
});
