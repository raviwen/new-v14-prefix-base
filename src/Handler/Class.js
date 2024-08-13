const { Client, Partials, GatewayIntentBits } = require('discord.js');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const config = require('../Config/config.js');

class Bot {
    constructor() {
        this.client = new Client({
            intents: Object.values(GatewayIntentBits),
            partials: Object.values(Partials)
        });
        this.client.commands = new Map();

        this._setupEventListeners();
    }

    async start() {
        await this._connectDatabase();
        this._loadCommands(path.join(__dirname, '../Commands'));
        this._loadEvents(path.join(__dirname, '../Events'));

        this.client.login(config.Bot.Token);
    }

    async _connectDatabase() {
        try {
            mongoose.set("strictQuery", false);
            await mongoose.connect(config.Bot.Mongo);
            console.log("Başarıyla veritabanına bağlantı kuruldu.");
        } catch (err) {
            console.error("Veritabanı bağlantı hatası:", err);
        }
    }

    _loadCommands(dir) {
        const cFiles = fs.readdirSync(dir);

        for (const file of cFiles) {
            const filePath = path.join(dir, file);
            const stat = fs.lstatSync(filePath);

            if (stat.isDirectory()) {
                this._loadCommands(filePath);
            } else if (file.endsWith('.js')) {
                const cmd = require(filePath);
                this.client.commands.set(cmd.name, cmd);
            }
        }
    }

    _loadEvents(dir) {
        const eFiles = fs.readdirSync(dir);

        for (const file of eFiles) {
            const filePath = path.join(dir, file);
            const stat = fs.lstatSync(filePath);

            if (stat.isDirectory()) {
                this._loadEvents(filePath);
            } else if (file.endsWith('.js')) {
                const event = require(filePath);
                if (event.once) {
                    this.client.once(event.name, (...args) => event.execute(...args, this.client));
                } else {
                    this.client.on(event.name, (...args) => event.execute(...args, this.client));
                }
            }
        }
    }

    _setupEventListeners() {
        this.client.on("guildUnavailable", async (guild) => {
            console.log(`[UNAVAILABLE]: ${guild.name}`);
        });

        this.client.on("disconnect", () => console.log("Bot is disconnecting..."));
        this.client.on("reconnecting", () => console.log("Bot reconnecting..."));
        this.client.on("error", (e) => console.error("Bot encountered an error:", e));
        this.client.on("warn", (info) => console.warn("Bot warning:", info));

        process.on("warning", (warn) => {
            console.warn("Process warning:", warn);
        });

        process.on("beforeExit", () => {
            console.log('Sistem kapatılıyor...');
        });

        process.on("uncaughtException", err => {
            const hata = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
            console.error("Beklenmedik Hata: ", hata);
        });
    }
}

module.exports = Bot;
