import { PermissionFlagsBits } from "discord.js";
import { Command } from "../types";

const command : Command = {
    name: "help",
    execute: (message, args) => {
        message.channel.send(`For right now Hiro implemented only this command, seggs command, changePrefix command and grant command to grant access for new members to the server (verify them)... `)
    },
    cooldown: 10,
    aliases: ["help"],
    permissions: ["Administrator", PermissionFlagsBits.ManageEmojisAndStickers] // to test
}

export default command