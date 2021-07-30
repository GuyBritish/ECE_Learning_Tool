const number = document.getElementById("fromNum");
const fromBase = document.getElementById("fromBase");
const toBase = document.getElementById("toBase");
const result = document.getElementById("result");

const submitBtn = document.getElementById("submitBtn");

//=================================================================================================

function checkBase(num, base) {
	for (let i = 0; i < num.length; ++i) {
		index = num.charCodeAt(i);
		console.log(index);
		if (index < 48 || index > 90) return false;
		if (index > 57 && index < 65) return false;
		if (index >= 48 && index <= 57 && index - 48 >= base) {
			return false;
		} else if (index >= 65 && index <= 90 && index - 55 >= base) {
			return false;
		}
	}
	return true;
}

function toDecimal(num, base) {
	if (base < 2 || base > 36) {
		throw "Invalid base!";
		// req.flash("error", "Invalid base");
		// return res.redirect("/tools/baseconverter");
	}
	if (!checkBase(num, base)) {
		throw `Invalid number for base ${base}!`;
		// req.flash("error", `Invalid number for base ${base}!`);
		// return res.redirect("/tools/baseconverter");
	}
	let res = 0;
	for (let i = 0; i < num.length; ++i) {
		if (num.charCodeAt(num.length - i - 1) >= 65) {
			val = num.charCodeAt(num.length - i - 1) - 55;
		} else {
			val = parseInt(num[num.length - i - 1]);
		}
		res += Math.pow(base, i) * val;
	}
	return res;
}

function fromDecimal(num, base) {
	return num.toString(base);
}

//=================================================================================================

submitBtn.addEventListener("click", function (event) {
	try {
		let x = number.value;
		let b1 = parseInt(fromBase.value);
		let b2 = parseInt(toBase.value);
		resultText.innerHTML = fromDecimal(toDecimal(x, b1), b2);
	} catch (err) {
		resultText.innerHTML = err;
	}
});
