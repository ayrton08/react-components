"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Field_1 = require("../../components/Field");
exports.default = {
    title: "Ui/Etiquetas/Field",
    component: Field_1.Field,
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(Field_1.Field, { label: "Email" }); };
exports.Basic = Template.bind({});
// definir un valor inicial por default
exports.Basic.args = {
    label: "Email",
};
