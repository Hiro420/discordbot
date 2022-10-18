"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const functions_1 = require("../functions");
module.exports = () => {
    const MONGO_URI = process.env.MONGO_URI;
    if (!MONGO_URI)
        return console.log((0, functions_1.color)("text", `🍃 Mongo URI not found, ${(0, functions_1.color)("error", "skipping.")}`));
    mongoose_1.default.connect(`${MONGO_URI}/${process.env.MONGO_DATABASE_NAME}`)
        .then(() => console.log((0, functions_1.color)("text", `🍃 MongoDB connection has been ${(0, functions_1.color)("variable", "established.")}`)))
        .catch(() => console.log((0, functions_1.color)("text", `🍃 MongoDB connection has been ${(0, functions_1.color)("error", "failed.")}`)));
};
