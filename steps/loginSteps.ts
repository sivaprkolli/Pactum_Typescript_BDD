import { Given, When, Then } from "@cucumber/cucumber";
const login_page = require("login-po");

var token_value: string;

Given('User on launch page', async function () {
  token_value = await login_page.login();
  await console.log("Token value :: " + token_value)
    await console.log("User on launch page")
  });

  Then('I save the response value as {string}', async function (token) {
    console.log(token)
    await this.token == token_value;
    await console.log("Token :: " + token_value);
  });

  Then('I use the saved value as a step', async function () {
    await console.log("Using token to tests " + token_value)
  });


When('User login using valid credentials', async function () {
  await console.log("User login using valid credentials")

  });

Then('User enter valid {string} and {string}', async function (username, password) {
  await console.log("username :: " + username + " and Password :: " + password)
  });