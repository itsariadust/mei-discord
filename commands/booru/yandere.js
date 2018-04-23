const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");
const booru = require("booru");

module.exports = class yandereCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name: "yandere",
      group: "booru",
      memberName: "yandere",
      description: "Posts a random image from yande.re (SFW)",

    });

  }

  run(message, callback) {

    booru.search("yd", ["rating:safe"], { limit:1, random:true })
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
