const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class ServerInfoCommand extends Commando.Command {

	constructor(client) {

		super(client, {

			name: "serverinfo",
			group: "info",
			memberName: "serverinfo",
			description: "Displays the server info",

		});

	}

	run(message, callback) {

		const vLevelNum = message.guild.verificationLevel;
		let vLevel;

		if (vLevelNum === 0) vLevel = "None";
		else if (vLevelNum === 1) vLevel = "Low";
		else if (vLevelNum === 2) vLevel = "Medium";
		else if (vLevelNum === 3) vLevel = "High";
		else if (vLevelNum === 4) vLevel = "Extreme";

		const embed = new RichEmbed()
			.setAuthor(message.guild.name, message.guild.iconURL)
			.setThumbnail(message.guild.iconURL)
			.addField("ID", message.guild.id)
			.addField("Server Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
			.addField("Verification Level", vLevel)
			.addField("Region", message.guild.region)
			.addField("Channels", message.guild.channels.size, true)
			.addField("Members", message.guild.memberCount, true)
			.addField("Created On", message.guild.createdAt)
			.addField("Roles", message.guild.roles.size);

		return message.embed(embed).then(callback);

	}

};
