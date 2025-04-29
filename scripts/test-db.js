// Load environment variables
require("dotenv").config({ path: ".env.local" });

const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("MONGODB_URI environment variable is not set");
  process.exit(1);
}

console.log("Attempting to connect to MongoDB...");
console.log(
  "Connection URI:",
  MONGODB_URI.replace(/\/\/([^:]+):([^@]+)@/, "//****:****@")
); // Hide credentials

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connection successful!");
    console.log("Connection state:", mongoose.connection.readyState);
    console.log("Connected to database:", mongoose.connection.name);

    // Get all collections
    mongoose.connection.db
      .listCollections()
      .toArray()
      .then((collections) => {
        console.log("Collections in database:");
        collections.forEach((collection) => {
          console.log(`- ${collection.name}`);
        });

        // Close connection
        mongoose.connection.close().then(() => {
          console.log("Connection closed successfully");
          process.exit(0);
        });
      });
  })
  .catch((err) => {
    console.error("Connection error:", err);
    process.exit(1);
  });
