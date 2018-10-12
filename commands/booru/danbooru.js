const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");
const Danbooru = require("danbooru");

module.exports = class danbooruCommand extends Command {
constructor(client) {
    super(client, {
      name:"danbooru",
      group:"booru",
      memberName:"danbooru",
      description:"Posts a random image from Danbooru (SFW)"
    });
  }

  run(message) {

    const booru = new Danbooru();
    booru.posts({ tags: "rating:safe order:rank" }).then(posts => {
      const index = Math.floor(Math.random() * posts.length);
      const post = posts[index];
      const url = booru.url(post.file_url);

      const embed = new MessageEmbed()
      .addField("Source", `${url}`)
      .setImage(`${url}`)

      return message.embed(embed);
    });

  }
};
