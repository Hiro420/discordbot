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
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const ClearCommand = {
    command: new discord_js_1.SlashCommandBuilder()
        .setName("clear")
        .setDescription("Delets messages from the current channel.")
        .addIntegerOption(option => {
        return option
            .setMaxValue(100)
            .setMinValue(1)
            .setName("messagecount")
            .setDescription("Message amount to be cleared");
    })
        .setDefaultMemberPermissions(discord_js_1.PermissionFlagsBits.ManageMessages),
    execute: interaction => {
        var _a, _b;
        let messageCount = Number((_a = interaction.options.get("messagecount")) === null || _a === void 0 ? void 0 : _a.value);
        (_b = interaction.channel) === null || _b === void 0 ? void 0 : _b.messages.fetch({ limit: messageCount }).then((msgs) => __awaiter(void 0, void 0, void 0, function* () {
            var _c, _d;
            if (((_c = interaction.channel) === null || _c === void 0 ? void 0 : _c.type) === discord_js_1.ChannelType.DM)
                return;
            const deletedMessages = yield ((_d = interaction.channel) === null || _d === void 0 ? void 0 : _d.bulkDelete(msgs, true));
            if ((deletedMessages === null || deletedMessages === void 0 ? void 0 : deletedMessages.size) === 0)
                interaction.reply("No messages were deleted.");
            else
                interaction.reply(`Successfully deleted ${deletedMessages === null || deletedMessages === void 0 ? void 0 : deletedMessages.size} message(s)`);
            setTimeout(() => interaction.deleteReply(), 5000);
        }));
    },
    cooldown: 10
};
exports.default = ClearCommand;
