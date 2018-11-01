const chalk = require("chalk");

module.exports = (client) => {
  console.log(chalk.green("Starting up Mei..."));

  console.log(chalk.green(`Mei is up and running.\nOperating on ${client.guilds.size} servers.\nOperating for ${client.users.size} users.\n\n`));

  function setActivity() {
    let status = [`in ${client.guilds.size} servers`, `with ${client.users.size} users`, "m!help for help", "with Kiana", "with a cat"];
    let info = status[Math.floor(Math.random() * status.length)];

    client.user.setActivity(info);
    console.log(`[Console] Activity set to (${info})`);
  }

  setInterval(setActivity, 300000);
};