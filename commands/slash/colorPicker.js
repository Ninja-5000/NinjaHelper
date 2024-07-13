const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "colorpicker",
  requires: [],
  execute(client, int) {
    const embed = new EmbedBuilder()
      .setTitle("Color Picker")
      .setDescription(`Color for hex: \`${int.options.getString("hex")}\``)
      .setImage(
        `https://singlecolorimage.com/get/${
          int.options.getString("hex")
            ? int.options.getString("hex").replace("#", "").toLowerCase()
            : "74b9ff"
        }/200x200`
      )
      .setColor(
        int.options.getString("hex") ? int.options.getString("hex") : "#74b9ff"
      );
    int.reply({ embeds: [embed] });
  },
};
