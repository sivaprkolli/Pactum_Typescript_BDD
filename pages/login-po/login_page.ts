
const { spec, request } = require('pactum');
//const { request } = pactum;

class LoginPage {

    async login() {
    let response = await spec().post('https://reqres.in/api/login')
      .withJson({
        username: 'eve.holt@reqres.in',
        password: 'cityslicka'
      })
      .expectStatus(200);
      await console.log(" token  :: " + response.body.stringify);
      await console.log(" token  :: " + response.body.token);
      const token = response.body.token;
      return token;
    }

    async getListUsers() {
      let response = await spec().get('https://videogamedb.uk/api/videogame')
    
        .expectStatus(200);
        let firstElement = await response.body;
        await console.log(firstElement)

        if (await Array.isArray(response)) {
          // Extract the value of the first element in the array
          firstElement = await response[0];
    
          // Log or use the value as needed
          await console.log('Value of the first element:', firstElement);
          await console.log('Value of the first element:', firstElement.name);
        } else {
          console.error('Response body is not an array.');
        }
        await console.log(" token  :: " + firstElement[0].name);
       // await console.log(" token  :: " + response.body.token);
        const token = await response[0];
        return token;
      }
}

module.exports = new LoginPage();