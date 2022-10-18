"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Guild_1 = __importDefault(require("../schemas/Guild"));
const event = {
    name: "guildCreate",
    execute: (guild) => {
        let newGuild = new Guild_1.default({
            guildID: guild.id,
            options: {},
            joinedAt: Date.now()
        });
        newGuild.save();
    }
};
exports.default = event;
