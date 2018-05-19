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
const afk = require("./assets/json/settings/afk.json");

// client
const client = new Commando.Client({
  owner: "175565380981358592",
  commandPrefix: ">",
  disableEveryone: true,
  unknownCommandResponse: false,
  guildOnly: true,
});

// consts for colors
const error = chalk.red;
const warn = chalk.keyword("orange");
const debug = chalk.keyword("yellow");

console.log("Starting up Mei...");

// for console logging. Useful for debugging
client.on("error", (e) => console.error(error(e)));
client.on("warn", (e) => console.warn(warn(e)));
client.on("debug", (e) => console.log(debug(e)));
client.on("ready", () => {

  console.log(chalk.green(`[READY] Mei now up and running as ${client.user.tag}`));
  client.user.setActivity(">help", ["Playing"]);

});

client.on("disconnect", event => {
  console.error(chalk.red(`[DISCONNECT] Disconnected with code ${event.code}. Attempting to reconnect...`));
  process.exit(0);
});

client.on("commandError", (cmd, err) => {

  if (err instanceof Commando.FriendlyError) return;
  console.error(chalk.red(`[ERROR] Error in command ${cmd.groupID}:${cmd.memberName}`, err));

});

client.on("commandBlocked", (msg, reason) => {
  console.log(oneLine `
    Command ${msg.command ? `${msg.command.groupID}:${msg.command.memberName}` : ""}
    blocked; ${reason}
  `);
});

client.on("commandPrefixChange", (guild, prefix) => {
  console.log(oneLine `
    Prefix ${prefix === "" ? "removed" : `changed to ${prefix || "the default"}`}
    ${guild ? `in guild ${guild.name} (${guild.id})` : "globally"}.
  `);
});

client.on("commandStatusChange", (guild, command, enabled) => {
  console.log(oneLine `
    Command ${command.groupID}:${command.memberName}
    ${enabled ? "enabled" : "disabled"}
    ${guild ? `in guild ${guild.name} (${guild.id})` : "globally"}.
  `);
});

client.on("groupStatusChange", (guild, group, enabled) => {
  console.log(oneLine `
    Group ${group.id}
    ${enabled ? "enabled" : "disabled"}
    ${guild ? `in guild ${guild.name} (${guild.id})` : "globally"}.
  `);
});

// message events
client.on("message", (message) => {
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
});

// non-error logging (guild updates)
client.on("guildCreate", (guild) => {
  console.log(chalk.blue("[UPDATE] Joined Guild:" + " " + `${guild.name}` + " " + `(${guild.id})`));
});
client.on("guildDelete", (guild) => {
  console.log(chalk.blue("[UPDATE] Left Guild:" + " " + `${guild.name}` + " " + `(${guild.id})`));
});
client.on("guildUnavailable", (guild) => {
  console.log(chalk.blue("[UPDATE] Guild Unavailable:" + " " + `${guild.name}` + " " + `(${guild.id})`));
});
client.on("guildUpdate", (oldGuild, newGuild) => {
  console.log(chalk.blue("[UPDATE] Guild Updated: From:" + " " + `${oldGuild.name}` + " " + `(${oldGuild.id})` + " to" + " " + `${newGuild.name}` + " " + `(${newGuild.id})`));
});

// settings provider, using sqlite
client.setProvider(
  sqlite.open(path.join(__dirname, "database.sqlite3")).then(db => new Commando.SQLiteProvider(db))
).catch(console.error);

// command group registries
client.registry.registerGroups([
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
]);
client.registry.registerDefaults();
client.registry.registerCommandsIn(path.join(__dirname, "commands"));

// now we log in OwO
client.login(process.env.BOT_TOKEN);