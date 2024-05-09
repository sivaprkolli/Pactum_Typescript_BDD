
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

      await console.log(" token  :: " + response.body.token);
      const token = response.body.token;
      return token;
    }
}

module.exports = new LoginPage();