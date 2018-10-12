const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");
const booru = require("booru")

module.exports = class yandereCommand extends Command {
constructor(client) {
    super(client, {
      name: "yandere",
      group: "booru",
      memberName: "yandere",
      description: "Posts a random image from yande.re (SFW)"

    });

  }

  run(message) {

    booru.search("yd",["rating:safe"],{limit:1,random:true})
      .then(booru.commonfy)
      .then(images  =>  {   //Log the direct link to each image
        for  (let  image  of  images)  {
          let url = image.common.file_url

          const embed = new MessageEmbed()
          .addField("Source", `${url}`)
          .setImage(`${url}`)

          return message.embed(embed)
        }
      })
  }
}
