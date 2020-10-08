
const request = require('supertest'); 
const dbConfig = require('./data/heros/dbconfig')

const db = require('./data/heros/herosmodel') 

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
          })

          it('/add request', async () => {

            await db.add({name:'dust', powers:'none'});

            const heros = await dbConfig('heros')

            expect(heros).toHaveLength(3)

    });
  });
});