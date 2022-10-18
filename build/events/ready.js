"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("../functions");
const event = {
    name: "ready",
    once: true,
    execute: (client) => {
        var _a;
        console.log((0, functions_1.color)("text", `💪 Logged in as ${(0, functions_1.color)("variable", (_a = client.user) === null || _a === void 0 ? void 0 : _a.tag)}`));
    }
};
exports.default = event;
