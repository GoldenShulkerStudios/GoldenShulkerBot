const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });



client.on('ready', () => {
    console.log(`Bot conectado como ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
    if (msg.content.startsWith('!g')) {
        const messageContent = msg.content.slice(3);
        if (!messageContent) {
            msg.channel.send('Hola, soy un bot en proceso de desarrollo');
        } else {
            msg.channel.send(`Tu mensaje fue "${messageContent}"`);
        }
    }
});

client.login('Token');
