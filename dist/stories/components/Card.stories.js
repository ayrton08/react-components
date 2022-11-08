"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Card_1 = require("../../components/Card");
var google_svg_1 = __importDefault(require("../assets/custom/google.svg"));
exports.default = {
    title: "Ui/Etiquetas/Card",
    component: Card_1.Card,
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(Card_1.Card, { price: 200, description: "Una zapatilla", title: "Zapatilla", category: "Calzados", image: google_svg_1.default })); };
exports.Basic = Template.bind({});
exports.Basic.args = {};
