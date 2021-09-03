const forbiddenWords = ['сука', 'бля', 'блядь', 'пиздец', 'нахуй', 'хуй', 'пизда', 'член', 'ебать', 'ебат', 'еблан',
    'Сука', 'Бля', 'Блядь', 'Пиздец', 'Нахуй', 'Хуй', 'Пизда', 'Член', 'Ебать', 'Ебат', 'Еблан'];

class Filter {
    /**
     * @param {string} text;
     * @return {boolean};
     */
    ifbadWord(text) {
        for (let i = 0; i < forbiddenWords.length; i++) {
            for (let j = 0; j < text.length; j++) {
                if (text.length >= forbiddenWords[i].length) {
                    let temp = '';
                    for (let x = 0; x < forbiddenWords[i].length; x++) {
                        temp = temp + text[x + j];
                    }
                    if (temp == forbiddenWords[i]) {
                        return true;
                    }
                }
            }
        }
    }
}

module.exports = Filter;













