const resultText = document.getElementById("result");
const copyBtn = document.getElementById("copyToClipboard");

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
