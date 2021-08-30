const TelegramApi = require('node-telegram-bot-api');

const token = '1898471406:AAFH_e_NimVD5Z95eZ_W8LhBBqJLKS6lUW0';;

const bot = new TelegramApi(token, {polling: true});

const oneDay = 86400000;



setHomework();

function setHomework() {
    setTimeout(() => {
        bot.sendMessage(-1001398634824, );
        setHomework();
    }, oneDay)
}



bot.on('new_chat_members', msg => {
    if (msg.chat.id == -1001398634824){
        bot.sendMessage(msg.chat.id, `Hello ${msg.new_chat_member.first_name}! You are added to our school group. I am bot Ghost. I do all the routine work.`);
    }
})

bot.on('message', msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    const username = msg.from.username;
    const firstName = msg.from.first_name;

    let firstSimbols = '';

    for (let i = 0; i < 7; i++) {
        firstSimbols = firstSimbols + text[i];
    }

    console.log(firstSimbols);

    if (firstSimbols == '/bot -h') {
        bot.sendMessage(655121468, `\n\n\n\nusername: ${username}\n first_name: ${firstName}\n Waiting for help ... \n question is: \n${text}`)
    }

    if (text == `/bot`) {
        bot.sendMessage(msg.chat.id, `Please enter full command.\nOn this time avalible commands like:\n/bot -help *question*`)
    }
})



