
const request = require('supertest'); 

const server = require('./server'); 

describe('server.js', () => {

  describe('index route', () => {

    it('should be in testing', async () => {
      expect(process.env.DB_ENV).toBe("testing")
    })
    
    it('/GET request', async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get('/heros');

      expect(response.status).toEqual(expectedStatusCode);
      expect(response.body).toHaveLength(3)
    })

          it('/DELETE request', async () => {
      const expectedStatusCode = 200;
      const response = await request(server).delete('/heros/1');
      const updatedDb = await request(server).get('/heros')
      console.log(response)

      expect(response.status).toEqual(expectedStatusCode);
      expect(response.body).toBe(1)
      expect(updatedDb.body).toHaveLength(2)

      // same test using promise .then() instead of async/await
    //   let response;
    //   return request(server).get('/').then(res => {
    //     response = res;

    //     expect(response.status).toEqual(expectedStatusCode);
    //   })
    // });

    // it('should return a JSON object from the index route', async () => {
    //   const expectedBody = { api: 'running' };

    //   const response = await request(server).get('/');

    //   expect(response.body).toEqual(expectedBody);
    // });

    // it('should return a JSON object from the index route', async () => {
    //   const response = await request(server).get('/');

    //   expect(response.type).toEqual('application/json');
    });
  });
});