const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ping",
  requires: [],
  execute(client, int) {
    const embed = new EmbedBuilder()
      .setTitle("Pong!")
      .setDescription(`${client.ws.ping}ms`)
      .setColor("#74b9ff");
    int.reply({
      embeds: [embed],
    });
  },
};
