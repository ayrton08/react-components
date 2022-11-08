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
exports.Card = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./card.css");
var Card = function (_a) {
    var price = _a.price, description = _a.description, image = _a.image, title = _a.title, category = _a.category, onEvent = _a.onEvent;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "product-card" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "badge" }, { children: "Hot" })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "product-tumb" }, { children: (0, jsx_runtime_1.jsx)("img", { src: image, alt: "" }) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "product-details" }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "product-catagory" }, { children: category })), (0, jsx_runtime_1.jsx)("h4", { children: (0, jsx_runtime_1.jsx)("a", { children: title }) }), (0, jsx_runtime_1.jsx)("p", { children: description }), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "product-bottom-details" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "product-price" }, { children: ["$", price] })), (0, jsx_runtime_1.jsx)("button", __assign({ className: "button-buy" }, { children: "Add to cart" }))] }))] }))] })));
};
exports.Card = Card;
exports.default = exports.Card;
