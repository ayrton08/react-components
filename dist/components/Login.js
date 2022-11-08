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
exports.Login = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./login.css");
var Login = function (_a) {
    var facebook = _a.facebook, google = _a.google, icon = _a.icon;
    return ((0, jsx_runtime_1.jsxs)("form", { children: [(0, jsx_runtime_1.jsx)("img", { src: icon, alt: "", className: "login" }), (0, jsx_runtime_1.jsx)("h3", { children: "Login" }), (0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "username" }, { children: "Username" })), (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Email", id: "username" }), (0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "password" }, { children: "Password" })), (0, jsx_runtime_1.jsx)("input", { type: "password", placeholder: "Password", id: "password" }), (0, jsx_runtime_1.jsx)("button", { children: "Log In" }), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "social" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "icons-container" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: google || "", alt: "", className: "icon" }), (0, jsx_runtime_1.jsx)("span", { children: "Google" })] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "icons-container" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: facebook || "", alt: "", className: "icon" }), (0, jsx_runtime_1.jsx)("span", { children: "Facebook" })] }))] }))] }));
};
exports.Login = Login;
