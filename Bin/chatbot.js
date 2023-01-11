(async () => {
  const { Bot } = require("smart-botto");
  const chatbot = new Bot("Vlkyre");
  chatbot
    .chat({
      message: "Hi",
      user: "123",
    })
    .then((res) => console.log(res.response, res.messsage));
})();
