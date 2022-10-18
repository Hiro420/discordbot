"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("../functions");
const command = {
    name: "changePrefix",
    execute: (message, args) => {
        let prefix = args[1];
        if (!prefix)
            return message.channel.send("No prefix provided");
        if (!message.guild)
            return;
        (0, functions_1.setGuildOption)(message.guild, "prefix", prefix);
        message.channel.send("Prefix successfully changed!");
    },
    permissions: ["Administrator"],
    aliases: []
};
exports.default = command;
