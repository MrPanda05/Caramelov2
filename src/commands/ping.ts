import { SlashCommandBuilder } from "discord.js"

module.exports = {
    data: new SlashCommandBuilder()
            .setName("Ping")
            .setDescription("Responde com um 8000mskkkkk"),
    async execute(interaction: any) {
            await interaction.reply('8000mskkkkk');
        },
};