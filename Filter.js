const forbiddenWords = ['[lл][oо][hxх]','[scс][yу][kк][aа]', '[bб][lл]я', '[pп][iи][zз]', '[nн][aа][hх][yу]й', '[xх][yу]й', 'ч[lл][eе][hн]', '[eе][bб][aа][tт]', '[eе][bб][lл][aа][nн]', '[hxх][eе][rpр]'];

class Filter {
    /**
     * @param {string} text;
     * @return {boolean};
     */
    ifbadWord(text) {
        for (let i = 0; i < forbiddenWords.length; i++) {
            if (RegExp(forbiddenWords[i], 'gi').test(text)) {
                return true;
            }
        }
    }
}

module.exports = Filter;













