const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");
const booru = require("booru")

module.exports = class konachanCommand extends Command {
constructor(client) {
    super(client, {
      name: "konachan",
      group: "booru",
      memberName: "konachan",
      description: "Posts a random image from Konachan (SFW)"
    });
  }

  run(message) {

    booru.search("kc",["rating:safe"],{limit:1,random:true})
      .then(booru.commonfy)
      .then(images  =>  {   //Log the direct link to each image
        for  (let  image  of  images)  {
          let url = image.common.file_url

          const embed = new MessageEmbed()
          .addField("Source", `${url}`)
          .setImage(`${url}`)

          return message.embed(embed);
        }
      })
  }
}
