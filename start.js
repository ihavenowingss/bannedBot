const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

global.config = JSON.parse(fs.readFileSync('config/prod.json'));

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});

client.login(config.bot_token);
