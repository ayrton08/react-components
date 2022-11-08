"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./field.css");
var Field = function (_a) {
    var label = _a.label;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "container" }, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "email", className: "label" }, { children: label || "" })), (0, jsx_runtime_1.jsx)("input", { type: "email", id: "email", className: "input", placeholder: "test@mail.com", required: true })] })));
};
exports.Field = Field;
exports.default = exports.Field;
