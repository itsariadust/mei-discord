/*
Mei Discord Bot
Copyright (c) 2018 Eris. All Rights Reserved
Check the MIT License
*/

//required libraries. (NOTE: Some commands do have module dependencies so check them out as well)
const Commando = require("discord.js-commando");
const sqlite = require("sqlite");
const path = require("path");
//const config = require("./config.json"); //this is just a config file (Only for the Indev version of Mei)

//client
const client = new Commando.Client({
  owner: "175565380981358592",
  commandPrefix: ">",
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
  console.log("Mei is now up and running...");
  client.user.setActivity(">help", ["Playing"]);

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
client.registry.registerGroup("core", "Core");
client.registry.registerGroup("info", "Info");
client.registry.registerGroup("fun", "Fun");
client.registry.registerGroup("reactions","Reactions");
client.registry.registerGroup("interactions","Interactions");
client.registry.registerGroup("booru","Booru")
client.registry.registerDefaults();
client.registry.registerCommandsIn(path.join(__dirname, "commands"));

//now we log in OwO
client.login(process.env.BOT_TOKEN);
