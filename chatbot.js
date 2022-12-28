(async () => {
  const { ChatBot } = require("djs-chatbot");
  const chatbot = new ChatBot();
  chatbot.chatBotVersion();
  chatbot.chat("1", "Hello", (response) => {
    console.log(response);
  });

  const { Bot } = require("smart-botto");
  const chatbot = new Bot("Vlkyre");
  await chatbot
    .chat({
      message: "Hi",
      user: "918436686758",
    })
    .then((res) => console.log(res));
})();
