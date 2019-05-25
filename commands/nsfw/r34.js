const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");
const booru = require("booru");

module.exports = class Rule34Command extends Commando.Command {
	constructor(client) {
		super(client, {
			name: "rule34",
			group: "nsfw",
			memberName: "rule34",
			description: "Posts a random image from rule34.xxx (SFW)",
			throttling: {
				usages: 1,
				duration: 60,
			},
		});
	}

	run(message, callback) {

		booru.search("r34", ["rating:explicit"], { limit:1, random:true })
			.then(booru.commonfy)
			.then(images => {
				for (const image of images) {
					const url = image.common.file_url;
					const embed = new RichEmbed();
					embed.addField("Source", `${url}`);
					embed.setImage(`${url}`);
					return message.embed(embed).then(callback);
				}
			});
	}
};