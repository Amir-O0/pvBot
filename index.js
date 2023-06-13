var Telegram = require("node-telegram-bot-api");
var bot = new Telegram("6159771015:AAGhlxu5IXzaz2sBKnYt9KsVlAZCcIbBJMc", {
  polling: true,
});

var owner = {
  id: 905259902,
  is_bot: false,
  first_name: "ᴬᵐⁱʳʰᵒˢˢᵉⁱⁿ",
  username: "Amiro_im",
};

bot.onText(/\/start/, (msg) => {
  if (msg.chat.type === "private") {
    bot.sendMessage(
      msg.chat.id,
      `💠Hello ${msg.chat.first_name} Welcome to my bot💠`,
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: `✉️Send message to ${owner.first_name}`,
                callback_data: "SendMessageToOwner",
              },
            ],
            [{ text: `Me (Pv)➡️`, url: "https://t.me/Amiro_im" }],
          ],
        },
        reply_to_message_id: msg.message_id,
      }
    );
  } else {
    bot.sendMessage(
      msg.chat.id,
      `❌⚠️Sorry ${msg.from.first_name} | @${msg.from.username} \n This Bot only work in private Chat`,
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: `Go to Pv➡️`,
                url: "https://t.me/AmiroIMbot",
              },
            ],
          ],
        },
        reply_to_message_id: msg.message_id,
      }
    );
  }
});

bot.on("message", (msg) => {
  console.log(msg);
  console.log(msg.text);

  if (msg.text !== "/start" && msg.chat.type === "private") {
    if (msg.chat.last_name === undefined) {
      msg.chat.last_name === "";
    } else {
      msg.chat.last_name === msg.chat.last_name;
    }
    bot.sendMessage(
      msg.chat.id,
      `Your message sended to ${owner.first_name}✅`,
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: `⬅️Back to menu`,
                callback_data: "BackToStartMenu",
              },
            ],
          ],
        },
        reply_to_message_id: msg.message_id,
      }
    ),
      bot.sendMessage(
        (msg.chat.id = owner.id),
        `🔰You have message from🔰` +
          `\n👤${msg.chat.first_name} ` +
          `\n👤 @${msg.chat.username} | ${msg.chat.id}` +
          `\n Text : ` +
          `\n 🔰${msg.text}🔰`
      );
  }
});

bot.on("callback_query", function onCallbackQuery(callbackQuery) {
  const msgCallBack = callbackQuery.message;
  if (callbackQuery.data === "SendMessageToOwner") {
    bot
      .deleteMessage(msgCallBack.chat.id, msgCallBack.message_id)
      .catch((er) => {
        return;
      });
    bot.sendMessage(msgCallBack.chat.id, `Send your message✉️`);
  }
  if (callbackQuery.data === "BackToStartMenu") {
    bot
      .deleteMessage(msgCallBack.chat.id, msgCallBack.message_id)
      .catch((er) => {
        return;
      });

    bot.sendMessage(
      msgCallBack.chat.id,
      `💠Hello ${msgCallBack.chat.first_name} Welcome to my bot💠`,
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: `✉️Send message to ${owner.first_name}`,
                callback_data: "SendMessageToOwner",
              },
            ],
            [{ text: `Me (Pv)➡️`, url: "https://t.me/Amiro_im" }],
          ],
        },
        reply_to_message_id: msgCallBack.message_id - 1,
      }
    );
  }
});
