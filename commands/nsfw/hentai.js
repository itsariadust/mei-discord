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
      ],
      throttling: {
        usages: 1,
        duration: 60
      }
    });

  }

  run(message, callback, args) {
    const db = new Danbooru();

    db.posts({tags: "rating:explicit" + `${args.tagQuery}`}).then(posts => {
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

