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
