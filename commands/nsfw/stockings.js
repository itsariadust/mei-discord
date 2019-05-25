const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");
const Danbooru = require("danbooru");

module.exports = class StockingsCommand extends Commando.Command {
	constructor(client) {
		super (client, {
			name:"stockings",
			aliases:["thighighs", "kneesocks", "th"],
			group:"nsfw",
			memberName:"stockings",
			description:"Stockings~",
			throttling: {
				usages: 1,
				duration: 60,
			},
		});
	}

	run(message, callback) {
		const db = new Danbooru();

		db.posts({ tags: "rating:questionable thighhighs" }).then(posts => {
			const index = Math.floor(Math.random() * posts.length);
			const post = posts[index];
			const url = db.url(post.file_url);

			const embed = new RichEmbed();
			embed.addField("Source", `${url}`);
			embed.setImage(`${url}`);
			return message.embed(embed).then(callback);
		});
	}
};