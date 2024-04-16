import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
const { request, settings } = require('pactum');

BeforeAll(async function ()  {
await console.log("Before All")
request.setBaseUrl('https://reqres.in');
settings.setReporterAutoRun(false);

});

Before(async function() {
  await  console.log("Before")
});

After(async function({pickle, result}){
    await console.log("After")
    if(result?.status == Status.FAILED){
        // const img =  await pageFixture.page.screenshot({path : `./screenshots/${pickle.name}.png`, type: "png"});
        // await this.attach(img, "image/png");
    }
   
    // await pageFixture.page.close();
    // await context.close();
})

AfterAll(async function ()  {
    await console.log("After All")
 //  await browser.close();
});