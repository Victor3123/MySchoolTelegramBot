const opt = require("./options.json");


class Commands {
    /**
     * @param {string} text;
     */
    // ifHelp(text) {
    //     let firstSimbols = '';
    //     for (let i = 0; i < 7; i++) {
    //         firstSimbols = firstSimbols + text[i];
    //     }
    //     if (firstSimbols === '/bot -h') return true;
    // }

    /**
     * @param {string} text;
     */
    ifHelp(text) {
        return RegExp('^\/bot -h','i').test(text);
    }
}

module.exports = Commands;