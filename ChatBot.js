const fetch = require("node-fetch");
API_URL =
  "https://api-inference.huggingface.co/models/r3dhummingbird/DialoGPT-medium-joshua";

const payload = {
  inputs: {
    text: "Hello",
  },
};
const headers = {
  Authorization: "Bearer " + process.env.HUGGINGFACE_TOKEN,
};

const response = await fetch(API_URL, {
  method: "post",
  body: JSON.stringify(payload),
  headers: headers,
});
const data = await response.json();
let botResponse = "";
if (data.hasOwnProperty("generated_text")) {
  botResponse = data.generated_text;
} else if (data.hasOwnProperty("error")) {
  botResponse = data.error;
}
console.log(botResponse);
