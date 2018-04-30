const Commando = require("discord.js-commando");
const axios = require("axios");

module.exports = class CatCommand extends Commando.Command {
  constructor (client) {
    super (client, {
      name:"cat",
      group:"images",
      memberName:"cat",
      description:"Posts a random cat image"
    });
  }

  run (message) {
    axios.get("http://aws.random.cat/meow")
      .then((response) => {
        message.channel.send(response.data.file);
      }).catch((err) => {
        message.channel.send(`Oh no, an error occured: \`${err.message}\``);
      });
  }
};

