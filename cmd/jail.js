module.exports = {
  config: {
    name: "jail",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Muzan",
    description: "Jail a user with fun animation",
    commandCategory: "fun",
    usages: "[tag user]",
    cooldowns: 5,
  },

  run: async ({ api, event, args }) => {
    const { threadID, messageID, senderID } = event

    const mention = Object.keys(event.mentions)[0] || senderID

    if (!mention) {
      return api.sendMessage("Please tag someone to jail!", threadID, messageID)
    }

    const Canvas = require("canvas")
    const fs = require("fs")
    const axios = require("axios")

    try {
      // Get user avatar
      const avatar = await axios.get(
        `https://graph.facebook.com/${mention}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
        { responseType: "arraybuffer" },
      )

      // Create canvas
      const canvas = Canvas.createCanvas(400, 400)
      const ctx = canvas.getContext("2d")

      // Load jail overlay
      const jailImg = await Canvas.loadImage("https://i.imgur.com/QbWqvzr.png")
      const userImg = await Canvas.loadImage(avatar.data)

      // Draw user avatar
      ctx.drawImage(userImg, 0, 0, 400, 400)

      // Draw jail bars
      ctx.drawImage(jailImg, 0, 0, 400, 400)

      const buffer = canvas.toBuffer()

      api.sendMessage(
        {
          body: `ðŸ”’ User has been jailed! ðŸ”’`,
          attachment: fs.createWriteStream(__dirname + "/cache/jail.png").end(buffer),
        },
        threadID,
        messageID,
      )
    } catch (error) {
      api.sendMessage("Error creating jail image!", threadID, messageID)
    }
  },
}
