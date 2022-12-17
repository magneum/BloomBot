(async () => {
var { getBuffer } = require("./Core/myfunc");
let h = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=+918436686758`);
})();
