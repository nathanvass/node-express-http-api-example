import express from "express";
import { makeCamelCase } from "./controller/textManpipulation.controller";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/text/camelcase", (req: express.Request, res: express.Response) => {
  makeCamelCase(req, res);
});

// TODO Task 1.2: Implement the router for the implemented reverseString function

// TODO Task 2.1: Implement 404 default route

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
