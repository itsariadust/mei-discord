const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");
const booru = require("booru");

module.exports = class konachanCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name: "paheal",
      group: "nsfw",
      memberName: "paheal",
      description: "Posts a random image from rule34.paheal.net (SFW)",

    });

  }

  run(message, callback) {

    booru.search("paheal", ["rating:explicit"], { limit:1, random:true })
      .then(booru.commonfy)
      .then(images => {
        for (const image of images) {
          const url = image.common.file_url;
          const embed = new RichEmbed();
          embed.addField("Source", `${url}`);
          embed.setImage(`${url}`);
          return message.embed(embed).then(callback);
        }
      });
  }
};