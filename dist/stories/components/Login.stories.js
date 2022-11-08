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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dark = exports.Light = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Login_1 = require("../../components/Login");
var login_svg_1 = __importDefault(require("../assets/custom/login.svg"));
var facebook_svg_1 = __importDefault(require("../assets/custom/facebook.svg"));
var google_svg_1 = __importDefault(require("../assets/custom/google.svg"));
exports.default = {
    title: "Ui/Etiquetas/Login",
    component: Login_1.Login,
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(Login_1.Login, __assign({}, args)); };
exports.Light = Template.bind({});
exports.Light.args = {
    dark: false,
    icon: login_svg_1.default,
    facebook: facebook_svg_1.default,
    google: google_svg_1.default,
};
exports.Dark = Template.bind({});
exports.Dark.args = {
    dark: true,
    icon: login_svg_1.default,
    facebook: facebook_svg_1.default,
    google: google_svg_1.default,
    onEvent: function (value) {
        console.log(value);
    },
};
