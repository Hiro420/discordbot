"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const functions_1 = require("../functions");
module.exports = (client) => {
    let eventsDir = (0, path_1.join)(__dirname, "../events");
    (0, fs_1.readdirSync)(eventsDir).forEach(file => {
        if (!file.endsWith(".js"))
            return;
        let event = require(`${eventsDir}/${file}`).default;
        event.once ?
            client.once(event.name, (...args) => event.execute(...args))
            :
                client.on(event.name, (...args) => event.execute(...args));
        console.log((0, functions_1.color)("text", `🌠 Successfully loaded event ${(0, functions_1.color)("variable", event.name)}`));
    });
};
