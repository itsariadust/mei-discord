const Commando = require('discord.js-commando');
const {RichEmbed} = require('discord.js');

const client = new Commando.Client({
    owner: '175565380981358592',
    commandPrefix: 'm!'
    
});

module.exports = class UserInfoCommand extends Commando.Command {
    
    constructor(client) {
        super(client, {
            name:'user',
            group:'utility',
            memberName:'userinfo',
            description:'Displays user info. Much different from profile'
        });
    }
    
    run(message, args, callback) {
        
        let member = message.mentions.members.first();
        const embed = new RichEmbed();
        var color = 0xC63D85;
        
        if (!member) {
            
            embed.setTitle('Information About' + " " + message.author.username);
            embed.setColor(color);
            embed.addField("Joined in Discord:", message.author.createdAt, true);
            embed.addField("Joined in server:", message.member.joinedAt, true);
            return message.embed(embed).then(callback);
            
        } else
        
        embed.setTitle('Information About' + " " + member.displayName);
        embed.setColor(color);
        embed.addField("Joined in Discord:", member.joinedAt, true);
        embed.addField("Joined in server:", member.joinedTimestamp, true);
        return message.embed(embed).then(callback);
        
    }
    
};