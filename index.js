/*
Mei Discord Bot
Copyright (c) 2018 Eris. All Rights Reserved
*/

//required libraries. Using both discord.js and discord.js-commando cuz why not
const Commando = require("discord.js-commando");
const sqlite = require("sqlite");
const path = require("path");
const config = require("./config.json"); //this is just a config file

//client
const client = new Commando.Client({
  owner: "175565380981358592",
  commandPrefix: "m!",
  disableEveryone: true,
  unknownCommandResponse: false
});

//for console logging
client.on("error", console.error);
client.on("warn", console.warn);
client.on("debug", console.log);
client.on("ready", () => {

  console.log("Loading...");
  console.log("Mei now up and running...");
  client.user.setActivity("m!help", ["Playing"]);

});
client.on("commandError", (cmd, err) => {

  if (err instanceof Commando.FriendlyError) return;
  console.error("Error in command $cmd.groupID:$cmd.memberName", err);

});

//setting provider, using sqlite
client.setProvider(
  sqlite.open(path.join(__dirname,"database.sqlite3")).then(db => new Commando.SQLiteProvider(db))
).catch(console.error);

//command registries
client.registry.registerGroup("core", "Core");
client.registry.registerGroup("info", "Info");
client.registry.registerGroup("fun", "Fun");
client.registry.registerGroup("reactions","Reactions");
client.registry.registerDefaults();
client.registry.registerCommandsIn(path.join(__dirname, "commands"));

//now we log in OwO
client.login(config.token);
