const data = require("../public/data/data");

//=================================================================================================

const baseConvertPage = (req, res) => {
	res.render("tools/baseConverter", { baseList: data.baseList });
};

const twocmpConverterPage = (req, res) => {
	res.render("tools/twocmpConverter");
};

//=================================================================================================

const baseConvert = (req, res) => {};

//=================================================================================================

module.exports = {
	baseConvertPage,
	twocmpConverterPage,
	baseConvert,
};
