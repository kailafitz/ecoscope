
var modernizr = require("modernizr");

modernizr.build({ "feature-detects": ["img/webp"] }, function (result) {
    console.log(result); // the build
});