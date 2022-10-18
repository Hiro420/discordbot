"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const { Guilds, MessageContent, GuildMessages, GuildMembers } = discord_js_1.GatewayIntentBits;
const client = new discord_js_1.Client({ intents: [Guilds, MessageContent, GuildMessages, GuildMembers] });
const dotenv_1 = require("dotenv");
const fs_1 = require("fs");
const path_1 = require("path");
(0, dotenv_1.config)();
client.slashCommands = new discord_js_1.Collection();
client.commands = new discord_js_1.Collection();
client.cooldowns = new discord_js_1.Collection();
const handlersDir = (0, path_1.join)(__dirname, "./handlers");
(0, fs_1.readdirSync)(handlersDir).forEach(handler => {
    require(`${handlersDir}/${handler}`)(client);
});
client.login(process.env.TOKEN);
