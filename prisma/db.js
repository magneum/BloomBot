const models = require("./models");

const createDatabase = async () => {
  try {
    const { Antilink } = models;
    const antilinkData = {
      serverID: "123456",
      value: "example value",
    };
    const antilink = new Antilink(antilinkData);
    await antilink.save();
    console.log("Database creation successful");
  } catch (error) {
    console.error("Failed to create the database:", error);
  }
};

createDatabase();
