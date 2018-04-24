const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");
const Danbooru = require("danbooru");

module.exports = class EcchiCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name:"ecchi",
      group:"nsfw",
      memberName:"ecchi",
      description:"Posts a random ecchi image from Danbooru. tags is also accepted but only one is acceptable",

    });

  }

  run(message, callback, args) {
    args = message.content.split(" ");
    const db = new Danbooru();

    if (args[1]) {
      db.posts({tags: "rating:questionable " + `${args[1]}`}).then(posts => {
        const index = Math.floor(Math.random() * posts.length);
        const post = posts[index];
        const url = db.url(post.file_url);
  
        const embed = new RichEmbed();
        embed.addField("Source", `${url}`);
        embed.setImage(`${url}`);
        return message.embed(embed).then(callback);
      });
    } else {
      db.posts({tags: "rating:questionable"}).then(posts => {
        const index = Math.floor(Math.random() * posts.length);
        const post = posts[index];
        const url = db.url(post.file_url);
  
        const embed = new RichEmbed();
        embed.addField("Source", `${url}`);
        embed.setImage(`${url}`);
        return message.embed(embed).then(callback);
      });
    }
  }
};

