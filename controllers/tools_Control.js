const baseConvertPage = (req, res) => {
	res.render("tools/baseConverter");
};

const twocmpConverterPage = (req, res) => {
	res.render("tools/twocmpConverter");
};

//=================================================================================================

//=================================================================================================

module.exports = {
	baseConvertPage,
	twocmpConverterPage,
};
