import { PermissionFlagsBits } from "discord.js";
import { Command } from "../types";
const { Discord, Client, Attachment, Message, EmbedBuilder } = require('discord.js');
const seggsGif = ["https://media.tenor.com/i7S2Taae5H8AAAAC/sex-anime.gif"];

const command : Command = {
    name: "seggs",
    execute: (message, args) => {
        const gif = seggsGif[Math.floor(Math.random() * seggsGif.length)]
        if (!message.mentions.users.first())
        return message.reply("***please mention someone bruh...***");
        let Seggser = message.member
        let toSeggs = message.mentions.members?.first()
        message.channel.send(`${Seggser ? Seggser.user.username : message.member?.user.username} wants to fuck ${toSeggs ? toSeggs.user.username : message.member?.user.username}`)
        const embed = new EmbedBuilder()
          .setTitle(`Seggs?`,)
          .setColor('#FF8DC4')
          .setImage(gif);
          message.channel.send({ embeds: [embed] })
        
    },
    cooldown: 10,
    aliases: ["seggs"],
    permissions: [] // to test
}

export default command