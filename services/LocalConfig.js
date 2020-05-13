const fs = require('fs');
const Discord = require('discord.js');
const FileManager = require('./FileManager.js');

class LocalConfig {
    // TODO split class in model and service
    constructor() {
        this.load();
    }

    save() {
        FileManager.save(config.storage.config.prod, this);
    }

    load() {
        let data = FileManager.read(config.storage.config.prod);

        if (data) {
            this
                .setPrefix(data['prefix'])
                // more configs
            ;
        }
    }

    setPrefix(prefix) {
        this.prefix = prefix;

        return this;
    }
    
    getPrefix() {
        return this.prefix;
    }
    
    config(msg) {
        var parts = msg.content.split(" ");
        if (parts[1] === 'prefix') {
            this.setPrefix(parts[2]);
            this.save();
            msg.reply('Prefix changed to '+parts[2]);
        }
    }
}

module.exports = LocalConfig;
