const fs = require('fs');
const Discord = require('discord.js');

class FileManager {
    constructor() {}

    static read(filePath) {
        let data = fs.readFileSync(filePath, 'utf8', function(err, data) {
            data;
        })
        
        return JSON.parse(data);
    }

    static save(filePath, object) {
        fs.writeFile(filePath, JSON.stringify(object), function(err) {
            if(err) {
                // I don't even know if this return goes somewhere xD
                return 'Hey! There was a problem trying to save your data, contact Kaitho!';
            }
        });
    }
}

module.exports = FileManager;
