"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const command = {
    name: "grant",
    execute: (message, args) => {
        var _a, _b, _c;
        let toGrant = (_a = message.mentions.members) === null || _a === void 0 ? void 0 : _a.first();
        let role = ("1031864117625110568");
        let member = (_b = message.mentions.members) === null || _b === void 0 ? void 0 : _b.first();
        member === null || member === void 0 ? void 0 : member.roles.add(role);
        message.channel.send(`Granted perms to ${toGrant ? toGrant.user.username : (_c = message.member) === null || _c === void 0 ? void 0 : _c.user.username}!`);
    },
    cooldown: 10,
    aliases: ["grant"],
    permissions: ["Administrator", discord_js_1.PermissionFlagsBits.ManageEmojisAndStickers] // to test
};
exports.default = command;
