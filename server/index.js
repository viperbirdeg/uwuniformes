import express from "express";
import dotenv from "dotenv";
dotenv.config();
import https from 'https';
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js";
const port = 8000;
const origin = process.env.ORIGIN || "http://127.0.0.1:5501";
const api = process.env.API || `http://127.0.0.1:${port}`;

const app = express();

app.use(cors({
  origin: [origin, api],
  credentials: true,
  agent: new https.Agent({
    rejectUnauthorized: false
  })
}));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/uwuniformes/v1/users", userRoutes);
app.use("/uwuniformes/v1/products", productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
