class Utils {
    constructor() {
    }

    static getFirstWord(str)
    {
        let spacePosition = str.indexOf(' ');
        if (spacePosition === -1)
            return str;
        else
            return str.substr(0, spacePosition);
    }
}

module.exports = Utils;
