const config = require('../../Config/config');
const { EmbedBuilder, codeBlock } = require('discord.js');
module.exports = {
  name: 'messageCreate',
  execute(message, client) {
    if (message.author.bot || message.guild.id !== config.Bot.Guild) return;

    let prefixUsed;
    for (const prefix of config.Bot.Prefix) {
      if (message.content.startsWith(prefix)) {
        prefixUsed = prefix;
        break;
      }
    }

    if (!prefixUsed) return;

    const args = message.content.slice(prefixUsed.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);
    if (!command) return;

    try {
      if (command.type && command.type !== "") {
        switch (command.type) {
          case 'dev':
            if (!config.Roles.BotDev.includes(message.author.id)) {
              return message.reply('Bu komutu yalnızca geliştiriciler kullanabilir.');
            }
            break;
          case 'owner':
            if (!config.Roles.OwnerRoles.some(role => message.member.roles.cache.has(role))) {
              return message.reply('Bu komutu yalnızca sunucu sahipleri kullanabilir.');
            }
            break;
          case 'staff':
            if (!config.Roles.StaffRoles.some(role => message.member.roles.cache.has(role))) {
                return message.reply('Bu komutu yalnızca sunucu personeli kullanabilir.');
            }
            break;
          case 'user':
            break;
          default:
            return message.reply('Bu komut için uygun bir izin yapılandırması bulunamadı.');
        }
      }

      command.execute(message, args);

      const channel = message.guild.channels.cache.get(config.Channels.CommandLog);

      if(channel) {
        channel.send({ embeds: [
            new EmbedBuilder()
            .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true})})
            .setThumbnail(message.guild.iconURL({ dynamic: true, size: 1024}))
            .setDescription( `
             \`Kanal:\` ${codeBlock(`${message.channel.name}-(${message.channel.id})`)}
             \`Kullanıcı:\` ${codeBlock(`${message.author.tag}-(${message.author.id})`)}
             \`Tarih:\` <t:${Math.floor(Date.now() / 1000)}:F>
             \`Komut:\` ${codeBlock(message.content)}
            `)
        ]})
      }
    } catch (error) {
      console.error(error);
      message.reply('Komut yürütülürken bir hata oluştu.');
    }
  }
};
