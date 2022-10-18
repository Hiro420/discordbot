"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Discord, Client, Attachment, Message, EmbedBuilder } = require('discord.js');
const seggsGif = ["https://media.tenor.com/i7S2Taae5H8AAAAC/sex-anime.gif"];
const command = {
    name: "seggs",
    execute: (message, args) => {
        var _a, _b, _c;
        const gif = seggsGif[Math.floor(Math.random() * seggsGif.length)];
        if (!message.mentions.users.first())
            return message.reply("***please mention someone bruh...***");
        let Seggser = message.member;
        let toSeggs = (_a = message.mentions.members) === null || _a === void 0 ? void 0 : _a.first();
        message.channel.send(`${Seggser ? Seggser.user.username : (_b = message.member) === null || _b === void 0 ? void 0 : _b.user.username} wants to fuck ${toSeggs ? toSeggs.user.username : (_c = message.member) === null || _c === void 0 ? void 0 : _c.user.username}`);
        const embed = new EmbedBuilder()
            .setTitle(`Seggs?`)
            .setColor('#FF8DC4')
            .setImage(gif);
        message.channel.send({ embeds: [embed] });
    },
    cooldown: 10,
    aliases: ["seggs"],
    permissions: [] // to test
};
exports.default = command;
