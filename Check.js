const paragraph = "https://chat.whatsapp.com/LKN8uVBd8ucHRHofz0jBSd";
const regex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
const found = paragraph.match(regex);
console.log(found);
