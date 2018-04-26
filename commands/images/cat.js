require("dotenv").config();
const Commando = require("discord.js-commando");
const snekfetch = require("snekfetch");

module.exports = class CatCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name:"cat",
      group:"images",
      memberName:"cat",
      description:"Posts a random cat image",
    });
  }

  run(message) {
    try {
      const { body, headers } = snekfetch 
        .get("http://thecatapi.com/api/images/get") 
        .query({ api_key: process.env.CAT_TOKEN }); 
      const format = headers["content-type"].replace(/image\//i, ""); 

      return message.say({ files: [{ attachment: body, name: `cat.${format}` }] }); 

    } catch (err) {
      return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }
  }
};