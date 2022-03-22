"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var measurementUnits;
(function (measurementUnits) {
    measurementUnits[measurementUnits["mg"] = 0.001] = "mg";
    measurementUnits[measurementUnits["cg"] = 0.01] = "cg";
    measurementUnits[measurementUnits["dg"] = 0.1] = "dg";
    measurementUnits[measurementUnits["g"] = 1] = "g";
    measurementUnits[measurementUnits["dag"] = 10] = "dag";
    measurementUnits[measurementUnits["hg"] = 100] = "hg";
    measurementUnits[measurementUnits["kg"] = 1000] = "kg";
})(measurementUnits || (measurementUnits = {}));
function convert(base_u, convert_u, value) {
    const baseValue = value * measurementUnits[base_u];
    const convertValue = baseValue / measurementUnits[convert_u];
    return convertValue;
}
exports.default = convert;
