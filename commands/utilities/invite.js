const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    config: {
        name: "invite",
        aliases: [],
        category: "utilities",
        description: "Invite the bot to your server.",
        accessableby: "Members"
    },
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setColor("#2f3136")
        .setAuthor({ name: "Invite!"})
        .setDescription("```Invite me to your server!```")
        .setTimestamp()
        .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL()});

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel("Subscribe")
                    .setURL(`https://www.youtube.com/@the-extremez-coder`)
                    .setEmoji("1145053918162854068")
                    .setStyle("LINK"))
            .addComponents(
                new MessageButton()
                    .setLabel("Invite")
                    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=0&scope=bot`)
                    .setEmoji("🔗")
                    .setStyle("LINK"))
          .addComponents(
                new MessageButton()
                    .setLabel("Join")
                    .setURL(`https://discord.gg/pFBtX23UvZ`)
                    .setEmoji("1118063244221874237")
                    .setStyle("LINK")
            )
        
        message.channel.send({ embeds: [embed], components: [row] });
    }
}
