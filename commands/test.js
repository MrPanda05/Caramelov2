const { SlashCommandBuilder } = require('@discordjs/builders');
 
module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('test'),
    async execute(interaction) {
         return interaction.reply('https://imgur.com/a/LMeldnk');
    },
};