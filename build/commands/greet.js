"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const command = {
    name: "greet",
    execute: (message, args) => {
        var _a, _b;
        let toGreet = (_a = message.mentions.members) === null || _a === void 0 ? void 0 : _a.first();
        message.channel.send(`Hello there ${toGreet ? toGreet.user.username : (_b = message.member) === null || _b === void 0 ? void 0 : _b.user.username}!`);
    },
    cooldown: 10,
    aliases: ["sayhello"],
    permissions: ["Administrator", discord_js_1.PermissionFlagsBits.ManageEmojisAndStickers] // to test
};
exports.default = command;
