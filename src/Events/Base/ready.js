const config = require('../../Config/config')
const { joinVoiceChannel } = require("@discordjs/voice");
const { ActivityType } = require('discord.js')

module.exports =  {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`Başarıyla ${client.user.tag} Adıyla giriş yapıldı.`);



        const guild = await client.guilds.cache.get(config.Bot.Guild)

        await connectVoice(guild, client,config.Bot.BotVoice);
        setInterval(async () => {
            await connectVoice(guild, client,config.Bot.BotVoice);
        }, 30 * 60 * 1000);

    }
}



async function connectVoice(guild , client , channel) {
    if(client.channels.cache.get(channel)) {
        try {
            const voice = joinVoiceChannel({
                channelId: channel,
                guildId: guild.id,
                adapterCreator: guild.voiceAdapterCreator,
                selfMute: true,
                selfDeaf: true,
            })       
            console.log('Başarıyla ses kanalına bağlanıldı.');
        } catch(e) {
            console.error("Ses kanalına bağlanırken hatayla karşılaşıldı.", e)
        } 
    }


    try {
        await client.user.setPresence({ activities: [{ name: `discord.gg/aquara`, type: ActivityType.Listening }], status: "dnd" });
        console.log('Durum ayarlandı.');
    } catch(e) {
        console.error("Durum ayarlanırken bir hata oluştu:", e);

    }

}