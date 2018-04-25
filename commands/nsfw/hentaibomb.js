const Commando = require("discord.js-commando");
const Danbooru = require("danbooru");
const { RichEmbed } = require("discord.js");

module.exports = class HentaiBombCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name:"hentaibomb",
      group:"nsfw",
      memberName:"hentaibomb",
      description:"Posts 5 random hentai images in Danbooru. Tags are accepted but only one tag",
      args: [
        {
          key:"tagQuery",
          prompt:"Specify the tag that you want to find the image",
          type:"string",
          default:"",
          validate: tagQuery => {
            if(!tagQuery.includes("")) return true;
            return "Invalid tag. Only one tag is allowed. Make sure you typed it out properly";
          }
        }
      ]
    });

  }

  run(message, {tagQuery}, callback) {
    try {
      const db = new Danbooru();
      let i = 0;
      do {
        i = i + 1;
        db.posts({tags: "rating:explicit" + `${tagQuery}`, random: true, limit:100}).then(posts => {
          const index = Math.floor(Math.random() * posts.length);
          const post = posts[index];
          const url = db.url(post.file_url);
    
          const embed = new RichEmbed();
          embed.addField("Source", `${url}`);
          embed.setImage(`${url}`);
          return message.embed(embed).then(callback);
        });
      } while (i < 5);

    } catch (err) {
      return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }
  }
};