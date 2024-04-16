import { Given, When, Then  } from "@cucumber/cucumber";

Given('User on launch page', async function () {
    await console.log("User on launch page")

  });

When('User login using valid credentials', async function () {
  await console.log("User login using valid credentials")

  });

Then('User enter valid {string} and {string}', async function (username, password) {
  await console.log("username :: " + username + " and Password :: " + password)
  });