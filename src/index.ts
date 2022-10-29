import { Client, Events, GatewayIntentBits } from "discord.js";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});


client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});



client.login(process.env.TOKEN);