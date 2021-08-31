const opt = require("./options.json");


class Commands {
    /**
     * @param string;
     */
    ifHelp(text) {
        let firstSimbols = '';
        for (let i = 0; i < 7; i++) {
            firstSimbols = firstSimbols + text[i];
        }
        if (firstSimbols == '/bot -h') return true;
    }
}

module.exports = Commands;