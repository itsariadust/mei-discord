const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");
const Danbooru = require("danbooru");

module.exports = class ExhibitionCommand extends Commando.Command {
  constructor (client) {
    super (client,{
      name:"exhibitionism",
      group:"nsfw",
      memberName:"exhibitionism",
      description:"Public lewdness is very lewd >///<",
    });
  }

  run (message, callback) {
    const db = new Danbooru();
    

    db.posts({tags: "exhibitionism"}).then(posts => {
      const index = Math.floor(Math.random() * posts.length);
      const post = posts[index];
      const url = db.url(post.file_url);

      const embed = new RichEmbed();
      embed.addField("Source", `${url}`);
      embed.setImage(`${url}`);
      return message.embed(embed).then(callback);
    });
  }
};