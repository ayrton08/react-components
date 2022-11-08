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
var formik_1 = require("formik");
var initialValues = {
    email: "",
    password: "",
};
var Login = function (_a) {
    var google = _a.google, facebook = _a.facebook, icon = _a.icon, dark = _a.dark, onRegister = _a.onRegister, onEvent = _a.onEvent, schema = _a.schema;
    return ((0, jsx_runtime_1.jsx)(formik_1.Formik, __assign({ initialValues: initialValues, onSubmit: function (values) { return onEvent(__assign({}, values)); }, validationSchema: schema }, { children: function () { return ((0, jsx_runtime_1.jsxs)(formik_1.Form, __assign({ className: dark ? "form-dark" : "form-light" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: icon, alt: "", className: "login" }), (0, jsx_runtime_1.jsx)("h3", { children: "Login" }), (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Email", id: "username", className: dark ? "input-dark" : "input-light", name: "email" }), (0, jsx_runtime_1.jsx)("input", { type: "password", placeholder: "Password", id: "password", className: dark ? "input-dark" : "input-light", name: "password" }), (0, jsx_runtime_1.jsx)("button", __assign({ className: dark ? "button-dark" : "button-light", type: "submit" }, { children: "Log In" })), (0, jsx_runtime_1.jsx)("a", __assign({ href: onRegister, className: dark ? "register-dark" : "register-light" }, { children: "Create new account" })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "social" }, { children: [google && ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "icons-container" }, { children: [google && (0, jsx_runtime_1.jsx)("img", { src: google || "", alt: "", className: "icon" }), (0, jsx_runtime_1.jsx)("span", { children: "Google" })] }))), facebook && ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "icons-container" }, { children: [facebook && ((0, jsx_runtime_1.jsx)("img", { src: facebook || "", alt: "", className: "icon" })), (0, jsx_runtime_1.jsx)("span", { children: "Facebook" })] })))] }))] }))); } })));
};
exports.Login = Login;
exports.default = exports.Login;
