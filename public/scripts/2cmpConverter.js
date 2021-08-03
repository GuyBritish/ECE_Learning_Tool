const numberDec = document.getElementById("decNum");
const result2Cmp = document.getElementById("2cmpResult");
const number2Cmp = document.getElementById("2cmpNum");
const resultDec = document.getElementById("decResult");

const submitBtn1 = document.getElementById("submitBtn1");
const submitBtn2 = document.getElementById("submitBtn2");

//=================================================================================================

function addOne(num) {
	let ans = "";
	let crry = 1;
	for (let i = num.length - 1; i >= 0; --i) {
		if (!crry) {
			ans = num[i] + ans;
			continue;
		}
		if (num[i] == "1") {
			if (crry == 1) {
				ans = "0" + ans;
			}
		} else {
			if (crry == 1) {
				ans = "1" + ans;
				crry = 0;
			}
		}
	}
	console.log(ans);
	return ans;
}

function negate(num) {
	console.log(num);
	let ans = "";
	for (let i = 0; i <= num.length - 1; ++i) {
		if (num[i] == "0") {
			ans += "1";
		} else if (num[i] == "1") {
			ans += "0";
		}
	}
	ans = "1" + ans;
	console.log(ans);
	return ans;
}

function decToBin(num) {
	return parseInt(num).toString(2);
}

function signTrim(num, sign) {
	let ans = "";
	let start = 0;
	while (num[start + 1] == sign) {
		++start;
	}
	for (let i = start; i <= num.length - 1; ++i) {
		ans += num[i];
	}
	return ans;
}

//=================================================================================================

submitBtn1.addEventListener("click", function (event) {
	try {
		let x = numberDec.value;
		if (x[0] == "-") {
			x = x.slice(1);
			let res = addOne(negate(decToBin(x)));
			result2Cmp.innerHTML = signTrim(res, "1");
		} else {
			let res = decToBin(x);
			result2Cmp.innerHTML = signTrim(res, "0");
		}
	} catch (err) {
		result2Cmp.innerHTML = err;
	}
});

submitBtn2.addEventListener("click", function (event) {
	try {
		let x = number2Cmp.value;
	} catch (err) {
		resultDec.innerHTML = err;
	}
});
