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
const discord_js_1 = require("discord.js");
const functions_1 = require("../functions");
const mongoose_1 = __importDefault(require("mongoose"));
const event = {
    name: "messageCreate",
    execute: (message) => __awaiter(void 0, void 0, void 0, function* () {
        if (!message.member || message.member.user.bot)
            return;
        if (!message.guild)
            return;
        let prefix = process.env.PREFIX;
        if (mongoose_1.default.connection.readyState === 1) {
            let guildPrefix = yield (0, functions_1.getGuildOption)(message.guild, "prefix");
            if (guildPrefix)
                prefix = guildPrefix;
        }
        if (!message.content.startsWith(prefix))
            return;
        if (message.channel.type !== discord_js_1.ChannelType.GuildText)
            return;
        let args = message.content.substring(prefix.length).split(" ");
        let command = message.client.commands.get(args[0]);
        if (!command) {
            let commandFromAlias = message.client.commands.find((command) => command.aliases.includes(args[0]));
            if (commandFromAlias)
                command = commandFromAlias;
            else
                return;
        }
        let cooldown = message.client.cooldowns.get(`${command.name}-${message.member.user.username}`);
        let neededPermissions = (0, functions_1.checkPermissions)(message.member, command.permissions);
        if (neededPermissions !== null)
            return (0, functions_1.sendTimedMessage)(`
            You don't have enough permissions to use this command. 
            \n Needed permissions: ${neededPermissions.join(", ")}
            `, message.channel, 5000);
        if (command.cooldown && cooldown) {
            if (Date.now() < cooldown) {
                (0, functions_1.sendTimedMessage)(`You have to wait ${Math.floor(Math.abs(Date.now() - cooldown) / 1000)} second(s) to use this command again.`, message.channel, 5000);
                return;
            }
            message.client.cooldowns.set(`${command.name}-${message.member.user.username}`, Date.now() + command.cooldown * 1000);
            setTimeout(() => {
                var _a;
                message.client.cooldowns.delete(`${command === null || command === void 0 ? void 0 : command.name}-${(_a = message.member) === null || _a === void 0 ? void 0 : _a.user.username}`);
            }, command.cooldown * 1000);
        }
        else if (command.cooldown && !cooldown) {
            message.client.cooldowns.set(`${command.name}-${message.member.user.username}`, Date.now() + command.cooldown * 1000);
        }
        command.execute(message, args);
    })
};
exports.default = event;
