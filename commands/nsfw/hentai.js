const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");
const Danbooru = require("danbooru");

module.exports = class HentaiCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name:"hentai",
      group:"nsfw",
      memberName:"hentai",
      description:"Posts a random hentai image in Danbooru. Tags are accepted but only one tag",

    });

  }

  run(message, callback, args) {
    args = message.content.split(" ");
    const db = new Danbooru();

    if (args[1]) {
      db.posts({tags: "rating:explicit " + `${args[1]}`}).then(posts => {
        const index = Math.floor(Math.random() * posts.length);
        const post = posts[index];
        const url = db.url(post.file_url);
  
        const embed = new RichEmbed();
        embed.addField("Source", `${url}`);
        embed.setImage(`${url}`);
        return message.embed(embed).then(callback);
      });
    } else {
      db.posts({tags: "rating:explicit"}).then(posts => {
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

