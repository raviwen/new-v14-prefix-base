const { Schema, model } = require("mongoose");
module.exports = model("Snipe", new Schema({
    guildID: { type: String, default: "" },
    channelID: { type: String, default: "" },
    userID: { type: String, default: "" },
    messageContent: { type: String, default: "" },
    image: { type: String, default: "" },
    deletedDate: { type: Number, default: Date.now() }
}));