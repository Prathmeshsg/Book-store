import express from "express";
import mongoose from "mongoose";
import bookRoutes from "./src/books/book.route.js";
import orderRoutes from "./src/orders/order.route.js";
import cors from "cors";

import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);


async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.get("/", (req, res) => {
    res.send("Welcome");
  });
}
// sySe8ChMAKk7nfID

main()
  .then(() => console.log("MongoDB connected Successfully!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});