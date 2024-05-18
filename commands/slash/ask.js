const { EmbedBuilder } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "ask",
  requires: ["naviac"],

  async execute(client, int) {
    const prompt = int.options.getString("prompt");
    const ephemeral = int.options.getBoolean("ephemeral");

    const embed = new EmbedBuilder();

    await int.deferReply({
      ephemeral,
    });

    try {
      const res = await axios.put(
        "https://avsac-api.onrender.com/generate-response",
        {
          text: prompt,
        },
        {
          auth: {
            username: client.config.naviac.username,
            password: client.config.naviac.token,
          },
        }
      );

      const response = res.data.response;

      const embed = new EmbedBuilder()
        .setTitle("N.A.V.I.A.C.'s response")
        .setDescription(response)
        .setThumbnail(
          "https://cdn.discordapp.com/avatars/975365560298795008/632ac9e6edf7517fa9378454c8600bdf.png?size=4096"
        )
        .setColor(
          config.embeds && config.embeds.naviacEmbedColour
            ? config.embeds.naviacEmbedColour
            : "#fecdac"
        );

      await int.editReply({
        embeds: [embed],
      });
    } catch (e) {
      if (e.response.status == 429) {
        int.editReply({
          content: "`You're being rate-limited. Please try again later.`",
        });
      } else if (e.response.status == 500) {
        int.editReply({
          content:
            "`The N.A.V.I.A.C. API is currently facing an internal server error [500]`\n`Please try again later.`",
        });
      } else {
        int.editReply({
          content: "uhh something went wrong...",
        });
      }

      console.log(
        `\x1b[31mThe N.A.V.I.A.C. API request failed with status ${e.response.status} (${e.response.statusText})\x1b[0m`
      );
    }
  },
};
