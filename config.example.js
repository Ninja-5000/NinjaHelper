module.exports = {
  token: "<BOT_TOKEN>", // string
  owners: ["<USER_ID>"], // array<string> (user ID)
  mongo: "<MONGO_URI>", // string
  zipline: {
    token: null, // string
    url: null, // string (it should look like https://example.com)
    chunkSize: null, // number (in mb)
    maxFileSize: null, // number (in mb)
  },
  autocomplete: {
    tag: true, // whether tag command should have autocomplete
  },

  // DM me on Discord for a token - ninja_5000
  // Though there is no guarantee that I will provide you with one.
  naviac: {
    username: null, // string
    token: null, // string
  },
};
