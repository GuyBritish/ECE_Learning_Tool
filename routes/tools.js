const express = require("express");
const router = express.Router({ mergeParams: true });

const Control = require("../controllers/tools_Control");

//=================================================================================================

router.get("/baseconverter", Control.baseConvertPage);

router.get("/2cmpconverter", Control.twocmpConverterPage);

router.get("/calculator", Control.baseCalculator);

//=================================================================================================

module.exports = router;
