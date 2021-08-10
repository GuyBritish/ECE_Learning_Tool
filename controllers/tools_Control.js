const data = require("../public/data/data");

//=================================================================================================

const baseConvertPage = (req, res) => {
	res.render("tools/baseConverter", { baseList: data.baseList });
};

const twocmpConverterPage = (req, res) => {
	res.render("tools/twocmpConverter");
};

const baseCalculator = (req, res) => {
	res.render("tools/baseCalculator", { baseList: data.baseList, operatorList: data.operators });
};

//=================================================================================================

module.exports = {
	baseConvertPage,
	twocmpConverterPage,
	baseCalculator,
};
