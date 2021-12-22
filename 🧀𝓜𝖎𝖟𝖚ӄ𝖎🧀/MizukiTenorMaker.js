const tenors = require("./MizukiTenor");
module.exports = {
  MizukiTenorMaker(option) {
    let TenorGot;
    Object.keys(tenors).filter((key) => {
      if (key === option) TenorGot = tenors[key];
    });
    if (TenorGot) {
      return TenorGot[Math.floor(Math.random() * TenorGot.length)];
    } else {
      return "Invalid Request";
    }
  },
};
