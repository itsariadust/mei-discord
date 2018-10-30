/*
Mei Discord Bot
Built with discord.js and Commando in Node
*/

// required libraries. (NOTE: Some commands do have module dependencies so check them out as well)
require("dotenv").config();
const Commando = require("discord.js-commando");
const sqlite = require("sqlite");
const path = require("path");
const chalk = require("chalk");
const oneLine = require("common-tags").oneLine;
const fs = require("fs");
const afk = require("./assets/json/settings/afk.json");

// consts for colors
const error = chalk.red;
const warn = chalk.keyword("orange");
const debug = chalk.keyword("yellow");

// client
const client = new Commando.Client({
  owner: "175565380981358592",
  commandPrefix: ">",
  disableEveryone: true,
  unknownCommandResponse: false,
  guildOnly: true,
});

fs.readdir("./events/", (err, files) => {
  if (err) console.error(err);
  console.log(`Loading events... (${files.length})`);
  files.forEach(file => {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});

// for console logging. Useful for debugging
client
  .on("error", (e) => console.error(error(e)))
  .on("warn", (e) => console.warn(warn(e)))
  .on("debug", (e) => console.log(debug(e)))
  .on("disconnect", (event) => {
    console.error(chalk.red(`[DISCONNECT] Disconnected with code ${event.code}. Attempting to reconnect...`));
    process.exit(0);
  })
  .on("commandError", (cmd, err) => {
    if (err instanceof Commando.FriendlyError) return;
    console.error(chalk.red(`[ERROR] Error in command ${cmd.groupID}:${cmd.memberName}`, err));
  })

  .on("commandBlocked", (msg, reason) => {
    console.log(oneLine `
    Command ${msg.command ? `${msg.command.groupID}:${msg.command.memberName}` : ""}
    blocked; ${reason}`);
  })

  .on("commandPrefixChange", (guild, prefix) => {
    console.log(oneLine `
    Prefix ${prefix === "" ? "removed" : `changed to ${prefix || "the default"}`}
    ${guild ? `in guild ${guild.name} (${guild.id})` : "globally"}.`);
  })

  .on("commandStatusChange", (guild, command, enabled) => {
    console.log(oneLine `
    Command ${command.groupID}:${command.memberName}
    ${enabled ? "enabled" : "disabled"}
    ${guild ? `in guild ${guild.name} (${guild.id})` : "globally"}.`);
  })

  .on("groupStatusChange", (guild, group, enabled) => {
    console.log(oneLine `
    Group ${group.id}
    ${enabled ? "enabled" : "disabled"}
    ${guild ? `in guild ${guild.name} (${guild.id})` : "globally"}.`);
  })

// message events
  .on("message", (message) => {
  // When a tagged person is afk, this event is triggered to say that the person he/she just tagged is afk
    if (message.mentions) {
      message.mentions.users.map((user) => {
        if (afk[user.id]) {
          if (afk[user.id].afk === true) {
            message.channel.send(`${user.username} is AFK: ${JSON.stringify(afk[user.id].status.afkMsg)}`);
          }
        }
      });
    }
  })

// non-error logging (guild updates)
  .on("guildCreate", (guild) => {
    console.log(chalk.blue("[UPDATE] Joined Guild:" + " " + `${guild.name}` + " " + `(${guild.id})`));
  })
  .on("guildDelete", (guild) => {
    console.log(chalk.blue("[UPDATE] Left Guild:" + " " + `${guild.name}` + " " + `(${guild.id})`));
  })
  .on("guildUnavailable", (guild) => {
    console.log(chalk.blue("[UPDATE] Guild Unavailable:" + " " + `${guild.name}` + " " + `(${guild.id})`));
  })
  .on("guildUpdate", (oldGuild, newGuild) => {
    console.log(chalk.blue("[UPDATE] Guild Updated: From:" + " " + `${oldGuild.name}` + " " + `(${oldGuild.id})` + " to" + " " + `${newGuild.name}` + " " + `(${newGuild.id})`));
  });

// settings provider, using sqlite
client.setProvider(
  sqlite.open(path.join(__dirname, "database.sqlite3")).then(db => new Commando.SQLiteProvider(db))
).catch(console.error);

// command group registries
client.registry
  .registerGroups([
    ["core", "Core"],
    ["mod", "Mod"],
    ["info", "Info"],
    ["fun", "Fun"],
    ["booru", "Booru"],
    ["images", "Images"],
    ["nsfw", "NSFW"],
    ["reactions", "Reactions"],
    ["roleplay", "Roleplay"],
    ["misc", "Misc"]
  ])
  .registerDefaults()
  .registerCommandsIn(path.join(__dirname, "commands"));

// now we log in
client.login(process.env.BOT_TOKEN).catch(console.error);