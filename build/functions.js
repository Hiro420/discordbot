"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setGuildOption = exports.getGuildOption = exports.sendTimedMessage = exports.checkPermissions = exports.color = exports.getThemeColor = void 0;
const chalk_1 = __importDefault(require("chalk"));
const discord_js_1 = require("discord.js");
const Guild_1 = __importDefault(require("./schemas/Guild"));
const mongoose_1 = __importDefault(require("mongoose"));
const themeColors = {
    text: "#ff8e4d",
    variable: "#ff624d",
    error: "#f5426c"
};
const getThemeColor = (color) => Number(`0x${themeColors[color].substring(1)}`);
exports.getThemeColor = getThemeColor;
const color = (color, message) => {
    return chalk_1.default.hex(themeColors[color])(message);
};
exports.color = color;
const checkPermissions = (member, permissions) => {
    let neededPermissions = [];
    permissions.forEach(permission => {
        if (!member.permissions.has(permission))
            neededPermissions.push(permission);
    });
    if (neededPermissions.length === 0)
        return null;
    return neededPermissions.map(p => {
        var _a;
        if (typeof p === "string")
            return p.split(/(?=[A-Z])/).join(" ");
        else
            return (_a = Object.keys(discord_js_1.PermissionFlagsBits).find(k => Object(discord_js_1.PermissionFlagsBits)[k] === p)) === null || _a === void 0 ? void 0 : _a.split(/(?=[A-Z])/).join(" ");
    });
};
exports.checkPermissions = checkPermissions;
const sendTimedMessage = (message, channel, duration) => {
    channel.send(message)
        .then(m => setTimeout(() => __awaiter(void 0, void 0, void 0, function* () { return (yield channel.messages.fetch(m)).delete(); }), duration));
    return;
};
exports.sendTimedMessage = sendTimedMessage;
const getGuildOption = (guild, option) => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.connection.readyState === 0)
        throw new Error("Database not connected.");
    let foundGuild = yield Guild_1.default.findOne({ guildID: guild.id });
    if (!foundGuild)
        return null;
    return foundGuild.options[option];
});
exports.getGuildOption = getGuildOption;
const setGuildOption = (guild, option, value) => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.connection.readyState === 0)
        throw new Error("Database not connected.");
    let foundGuild = yield Guild_1.default.findOne({ guildID: guild.id });
    if (!foundGuild)
        return null;
    foundGuild.options[option] = value;
    foundGuild.save();
});
exports.setGuildOption = setGuildOption;
