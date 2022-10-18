"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const command = {
    name: "help",
    execute: (message, args) => {
        message.channel.send(`For right now Hiro implemented only this command, seggs command, changePrefix command and grant command to grant access for new members to the server (verify them)... `);
    },
    cooldown: 10,
    aliases: ["help"],
    permissions: ["Administrator", discord_js_1.PermissionFlagsBits.ManageEmojisAndStickers] // to test
};
exports.default = command;
