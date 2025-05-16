import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoute from "./Routers/productRoute.js";

//dotenv configuration
dotenv.config();

//express initialization
const app = express();

//default middlewares
app.use(express.json());
app.use(cors());

//default route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to our API");
});

//custom routes
app.use("/api/product", productRoute);

//port declaration
const port = process.env.PORT || 4000;

//server starting
app.listen(port, () => {
  console.log(`server started and running on port ${port}`);
});
