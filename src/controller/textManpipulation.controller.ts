import * as deepl from 'deepl-node';
import express from "express";
import _ from "lodash";

/**
 * Reverse a string
 * @param req
 * @param res
 * @returns void
 **/
export const reverseString = (
  req: express.Request,
  res: express.Response
): void => {
  // TODO Task 1.1: Implement the reverseString function
  const text = req.body.text;

  function reverse(s: string){
    return s.split("").reverse().join("");
}

  res.send({
    text,
    reverseText: reverse(text)
  });
};

export const translateString = (
  req: express.Request,
  res: express.Response
): void => {
  const text = req.body.text;
  console.log(req.body.text)

  const authKey = "f9ce03ed-51ce-83e1-9738-0aaddb2a457c:fx"; // Replace with your key
  const translator = new deepl.Translator(authKey);

    (async () => {
    const result = await translator.translateText(text, null, 'en-US');

  res.send({
    text,
    translateText: result
    });
  })();
};

export const makeCamelCase = (
  req: express.Request,
  res: express.Response



): void => {
  const text = req.body.text;

  res.send({
    text,
    camelCaseText: _.camelCase(text),
  });
};

