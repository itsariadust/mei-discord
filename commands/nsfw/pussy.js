const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");
const Danbooru = require("danbooru");

module.exports = class PussyCommand extends Commando.Command {
  constructor (client) {
    super (client,{
      name:"pussy",
      group:"nsfw",
      memberName:"pussy",
      description:"Pussy~",
    });
  }

  run (message, callback) {
    const db = new Danbooru();

    db.posts({tags: "rating:explicit spread_pussy"}).then(posts => {
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