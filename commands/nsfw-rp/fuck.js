const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class FuckGIFCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "fuck",
      group: "nsfw",
      memberName: "fuck",
      description: "Fucks the member you mentioned, or a random member."
    });
  }

  run(message) {
    let fuckIndex = ["https://danbooru.donmai.us/data/__fujisawa_aya_gundam_and_gundam_build_divers_drawn_by_mushiro_nijie728995__2d99ba2f05a34be9bde650dbd4ab6549.gif", "https://danbooru.donmai.us/data/__akatsuki_kirika_senki_zesshou_symphogear_drawn_by_nekololisama__aad855372bb9c295e5d0c7ab089eda8c.gif", "https://hijiribe.donmai.us/data/__yakumo_yukari_touhou_drawn_by_buckethead__8763c836504617a8be5c1d5cb59205b3.gif", "https://hijiribe.donmai.us/data/__vanilla_nekopara_drawn_by_sayori__79cc88e6eb49ff3ea81973a4d8f60c8c.gif", "https://hijiribe.donmai.us/data/__ugajin_kotori_araburu_oppai_san_drawn_by_bekotarou__7371e29ed163644eba126a1dbfb4067e.gif"];

    let member = message.mentions.members.first();
    let randMember = message.guild.members.random().id;

    if(!member) {
      message.channel.send(`${message.author.username} fucks <@${randMember}>`);
    } else {
      message.channel.send(`${message.author.username} fucks <@${member}>`);
    }

    const embed = new RichEmbed()
      .setImage(fuckIndex[Math.floor(Math.random() * fuckIndex.length)]);
    message.channel.send({embed});
  }
};