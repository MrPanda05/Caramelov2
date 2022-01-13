import {Client,  Intents } from 'discord.js'
import dotenv  from "dotenv"

dotenv.config()

const client = new Client({ 
    intents: [Intents.FLAGS.GUILDS]
});

client.once('ready', () => {
    console.log('I wanna suck on gardevoir biggy tittys')
});

client.login(process.env.TOKEN);
