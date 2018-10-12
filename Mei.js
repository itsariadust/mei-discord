/*
Mei Discord Bot
Copyright (c) 2018 Eris. All Rights Reserved
Check the MIT License
*/

//required libraries. (NOTE: Some commands do have module dependencies so check them out as well)
require('dotenv').config()
const Commando = require("discord.js-commando");
const sqlite = require("sqlite");
const path = require("path");
const { MEI_OWNERS, MEI_PREFIX, MEI_TOKEN } = process.env

//client
const client = new Commando.Client({
  owner: MEI_OWNERS.split(','),
  commandPrefix: MEI_PREFIX,
  disableEveryone: true,
  unknownCommandResponse: false,
  guildOnly: true
});

//for console logging. Usefull for debugging
client.on("error", console.error);
client.on("warn", console.warn);
client.on("debug", console.log);
client.on("ready", () => {

  console.log("Loading...");
  console.log(`${client.user.tag} is now up and running!`);
  client.user.setActivity(`${MEI_PREFIX}help`, ["Playing"]);

});
client.on("commandError", (cmd, err) => {

  if (err instanceof Commando.FriendlyError) return;
  console.error("Error in command $cmd.groupID:$cmd.memberName", err);

});

//settings provider, using sqlite
client.setProvider(
  sqlite.open(path.join(__dirname,"database.sqlite3")).then(db => new Commando.SQLiteProvider(db))
).catch(console.error);

//command group registries
client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['core', 'Core'],
    ['info', 'Info'],
    ['fun', 'Fun'],
    ['reactions', 'Reactions'],
    ['interactions', 'Interactions'],
    ['booru', 'Booru']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, 'commands'));

//now we log in OwO
client.login(MEI_TOKEN);
