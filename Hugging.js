require("./config");
const { HfInference } = require("@huggingface/inference");

async function chatWithBot(input) {
  const inference = new HfInference(process.env.HUGGING_FACE_API_TOKEN);

  const response = await inference.textGeneration({
    model: "t5-base",
    inputs: input,
    parameters: {
      max_length: 50,
    },
  });

  return response.generated_text;
}

async function handleUserInput() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  while (true) {
    const userInput = await new Promise((resolve) => {
      rl.question("User: ", (answer) => {
        resolve(answer);
      });
    });

    if (userInput.toLowerCase() === "exit") {
      rl.close();
      break;
    }

    const response = await chatWithBot(userInput);
    console.log("Bot:", response);
  }
}

handleUserInput();
