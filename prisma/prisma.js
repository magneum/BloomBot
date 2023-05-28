require("../global");
const { PrismaClient } = require("@prisma/client");

const connectToPrisma = () => {
  const prisma = new PrismaClient();
  console.log("Connected to Prisma client");
  return prisma;
};

const connectToMongoose = () => {
  const mongoose = require("mongoose");
  mongoose.connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to Mongoose");
};

const environment = process.env.NODE_ENV || "development";
if (environment === "production") {
  module.exports = connectToPrisma();
} else {
  connectToMongoose();
  module.exports = null;
}
