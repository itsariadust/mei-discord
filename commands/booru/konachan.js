const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");
const booru = require("booru")

module.exports = class konachanCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name: "konachan",
      group: "booru",
      memberName: "konachan",
      description: "Posts a random image from Konachan (SFW)"

    });

  }

  run(message, callback) {

    booru.search("kc",["rating:safe"],{limit:1,random:true})
      .then(booru.commonfy)
      .then(images  =>  {   //Log the direct link to each image
        for  (let  image  of  images)  {
          let url = image.common.file_url
          const embed = new RichEmbed();
          embed.addField("Source", `${url}`)
          embed.setImage(`${url}`);
          return message.embed(embed).then(callback);
        }
      })
  }
}
