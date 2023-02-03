import express from "express";
import { reverse } from "lodash";
import { makeCamelCase, reverseString, translateString } from "./controller/textManpipulation.controller";
import cors from "cors"

const app = express();
const port = 3000;

app.use(express.json());

app.use(cors())

app.get("/", (req, res) => {
  res.send("Bye World");
});

app.post("/text/camelcase", (req: express.Request, res: express.Response) => {
  makeCamelCase(req, res);
});

app.post("/text/translateText", (req: express.Request, res: express.Response) => {
  translateString(req, res);
});

// TODO Task 1.2: Implement the router for the implemented reverseString function

app.post("/text/reverseText", (req: express.Request, res: express.Response) => {
  reverseString(req, res);
});

// TODO Task 2.1: Implement 404 default route

app.use(function(req,res){
  res.status(418).send('404 ERROR');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

