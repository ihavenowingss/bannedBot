const Discord     = require('discord.js');
const client      = new Discord.Client();
const fs          = require('fs');
const LocalConfig = require('./services/LocalConfig.js');
const Utils       = require('./services/Utils.js');

global.config      = JSON.parse(fs.readFileSync('config/prod.json'));
global.localConfig = new LocalConfig();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'getcurrentprefix') {
        msg.reply(localConfig.getPrefix());
    }
    
    if (!msg.content.startsWith(localConfig.getPrefix())) {
        return 0;
    } else {
        msg.content = msg.content.slice(localConfig.getPrefix().length);
    }
    
    switch (Utils.getFirstWord(msg.content)) {
        case 'ping':
            msg.reply('pong');
            break;
        case 'kata':
            msg.reply('@Katarstic#6666 has a small penis');
            break;
        case 'config':
            localConfig.config(msg);
            break;
    }
});

client.login(config.bot_token);
