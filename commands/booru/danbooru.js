const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");
const Danbooru = require("danbooru");

module.exports = class danbooruCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name:"danbooru",
      group:"booru",
      memberName:"danbooru",
      description:"Posts a random image from Danbooru (SFW). Tag is optional",
      args: [
        {
          key:"tagQuery",
          prompt:"Specify the tag that you want to find the image",
          type:"string",
          default:"",
          validate: tagQuery => {
            if(!tagQuery.includes(" ")) return true;
            return "Invalid tag. Only type one tag for a query";
          }
        }
      ]
    });

  }

  run(message, {tagQuery}) {

    const booru = new Danbooru();
    booru.posts({ tags: "rating:safe" + `${tagQuery}`, random: true}).then(posts => {
      const index = Math.floor(Math.random() * posts.length);
      const post = posts[index];
      const url = booru.url(post.file_url);

      const embed = new RichEmbed()
        .addField("Source", `${url}`)
        .setImage(`${url}`);
      return message.embed(embed);
    });

  }
};
