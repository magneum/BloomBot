var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { yta } = require("./𝐀𝐫𝐜𝐭𝐢𝐱🐞𝐁𝐞𝐞𝐭𝐥𝐞/Tube");
const Tinyurl = require("tinyurl-api");
(() => __awaiter(this, void 0, void 0, function* () {
    let { dl_link, thumb, title, filesizeF } = yield yta("https://youtu.be/Nr7fRBldXUU", "id4");
    console.log(title);
    console.log(thumb);
    console.log(filesizeF);
    let DirectFile;
    try {
        DirectFile = yield Tinyurl(dl_link);
    }
    catch (error) {
        console.log("❌𝐄𝐫𝐫𝐨𝐫: " + error);
    }
}))();
