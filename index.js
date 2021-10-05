const Commands = require('./Commands');

const opt = require("./options.json");

const Filter = require('./Filter.js');

const WebSocket = require('ws');

const ONE_DAY = 86400000;

const commands = new Commands();

const filter = new Filter();

const TelegramApi = require('node-telegram-bot-api');

const bot = new TelegramApi(opt.token, {polling: true});

const server = new WebSocket.Server({ port:8000 } );

server.on('connection', ws => {
    ws.send('Hello');
})

setHomework();

function setHomework() {
    setTimeout(() => {
        bot.sendMessage(opt.classGroupChatId);
        setHomework();
    }, ONE_DAY)
}

bot.on('new_chat_members', msg => {
    if (msg.chat.id == opt.classGroupChatId) {
        bot.sendMessage(msg.chat.id, `Hello ${msg.new_chat_member.first_name}! You are added to our school group. I am bot Ghost. I do all the routine work.`);
    }
})

bot.on('message', msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    const username = msg.from.username;
    const firstName = msg.from.first_name;

    if (filter.ifbadWord(text))
        bot.deleteMessage(msg.chat.id, msg.message_id);

    if (commands.ifHelp(text))
        bot.sendMessage(opt.myChatId, `\n\n\n\nusername: ${username}\n first_name: ${firstName}\n Waiting for help ... \n question is: \n${text}`);

    if (text == `/bot`)
        bot.sendMessage(msg.chat.id, `Please enter full command.\nOn this time avalible commands like:\n/bot -h *question*`);
})

bot.on('edited_message', msg => {
    const text = msg.text;
    if (filter.ifbadWord(text))
        bot.deleteMessage(msg.chat.id, msg.message_id);
})
