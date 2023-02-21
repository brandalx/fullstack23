const mongoose = require("mongoose");
const { config } = require("../config/secret");
main().catch((err) => console.log(err));

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.URLDB);
  console.log("mongo connect fullstack23 Atlas");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
