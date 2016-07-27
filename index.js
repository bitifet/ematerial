// index.js
// ========
"use strict";
var static_router = require("express-static");
var material_path = require.resolve("materialcss").replace(/\/[^\/]*$/, '/material-css/');
module.exports = static_router(material_path);
