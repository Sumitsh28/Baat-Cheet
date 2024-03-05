import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { connectToMongoDB } from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 6000;

// app.get("/", (req, res) => {
//   res.send("HELLO WORLD!!");
// });
app.use(express.json()); // parse req from req.body from json
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Started at PORT: ${PORT}`);
});
