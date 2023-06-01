const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load the environment variables from the .env file
dotenv.config();

// Get the database URL from the environment variable
const url = process.env.MONGODB_URL;

// Connect to the database
const db = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get all the collections in the database
const collections = db.listCollections();

// Iterate over the collections and delete all the documents
collections.forEach((collection) => {
  collection.deleteMany({}).then(
    () => {
      console.log(`Deleted all documents from ${collection.name}`);
    },
    (error) => {
      console.error(
        `Error deleting documents from ${collection.name}: ${error}`
      );
    }
  );
});

// Close the connection to the database
db.close();
