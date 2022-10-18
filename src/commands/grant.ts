import { PermissionFlagsBits } from "discord.js";
import { Command } from "../types";

const command : Command = {
    name: "grant",
    execute: (message, args) => {
        let toGrant = message.mentions.members?.first()
        let role = ("1031864117625110568");
        let member = message.mentions.members?.first();
        member?.roles.add(role);
        message.channel.send(`Granted perms to ${toGrant ? toGrant.user.username : message.member?.user.username}!`)
    },
    cooldown: 10,
    aliases: ["grant"],
    permissions: ["Administrator", PermissionFlagsBits.ManageEmojisAndStickers] // to test
}

export default command