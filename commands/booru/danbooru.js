const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");
const Danbooru = require("danbooru");

module.exports = class danbooruCommand extends Commando.Command {

	constructor(client) {

		super(client, {

			name:"danbooru",
			group:"booru",
			memberName:"danbooru",
			description:"Posts a random image from Danbooru (SFW)",

		});

	}

	run(message, callback) {

		const booru = new Danbooru();
		booru.posts({ tags: "rating:safe order:rank" }).then(posts => {
			const index = Math.floor(Math.random() * posts.length);
			const post = posts[index];
			const url = booru.url(post.file_url);

			const embed = new RichEmbed();
			embed.addField("Source", `${url}`);
			embed.setImage(`${url}`);
			return message.embed(embed).then(callback);
		});

	}
};
