module.exports = {
    name: 'ping',
    description: 'Botun ping değerini gösterir.',
    type: "user",  // dev / owner / staff / user
    execute(message, args) {
      message.reply(`Pong! ${message.client.ws.ping}ms`);
    }
  };
  