### Simple nodejs express server example to learn about http api's and javascript

To start the API, run `npm run serve`.

Open Tasks:

## Basic Tasks

# Task 1 - TextManipulation (Easy):

In this task, we create a service to reverse a string.

1.1 Finish the function in the textManipulation.controller.ts file.
1.2 Create a router for the function in index.ts.

# Task 2 - Error 404 (Easy):

2.1 Create an error 404 handler, which returns a custom error message.

## Translation Tasks

# Task 3 - String translation with external API (Medium):

For this task, we use the deepL API as a service to translate our texts. For easy integration, we use their node package deepl-node (https://github.com/DeepLcom/deepl-node).

3.1 Install the deepl-node package with npm
3.2 Create a file called translation.controller.ts
3.3 Create a function that accepts the req: express.Request and res: express.Response variables.
3.4 Implement the function to translate a text from any language to English. Use the "Usage" section on the deepl-node GitHub page as help for an example of how to create such a request.
(Ask Marcel for API key)
3.5 Return the translated string to the client

# Task 4 - Frontend integration (Medium):

We implement a translation service in the frontend. The goal is to add a translate button that translates the text into English.

4.1 Add a button on the frontend for activating the translation.
4.2 Create a function that accepts the text which should be translated.
4.3 Implement the function to create an HTTP post request to the previously created HTTP endpoint. For this, we use the angular HTTP module. (Guide: https://blog.angular-university.io/angular-http/)
4.4 Display the translated text on the frontend.
