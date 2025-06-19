import app from ".";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;
const db_password = process.env.DB_PASSWORD;
const db_user = process.env.DB_USER;

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${db_user}:${db_password}@library-management.m2znq0w.mongodb.net/?retryWrites=true&w=majority&appName=library-management`
    );
    console.log("Connected to mongodb using mongoose");
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
