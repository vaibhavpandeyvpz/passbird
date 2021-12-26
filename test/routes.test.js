const request = require('supertest');
const app = require('../app');

describe('Test routes', () => {
  describe('Test /', () => {
    it('returns endpoints list', async () => {
      const response = await request(app.callback())
        .get('/');
      expect(response.status).toBe(200);
      expect(response.body['/']).toBeDefined();
      expect(response.body['/email']).toBeDefined();
      expect(response.body['/password']).toBeDefined();
    });
  });

  describe('Test /email', () => {
    it('returns email as "disposable"', async () => {
      const response = await request(app.callback())
        .post('/email')
        .type('form')
        .send({ email: 'vaibhav.pandey@mailinator.com' });
      expect(response.status).toBe(200);
      expect(response.body.type).toBeDefined();
      expect(response.body.type).toBe('disposable');
    });

    it('returns email as "free"', async () => {
      const response = await request(app.callback())
        .post('/email')
        .type('form')
        .send({ email: 'vaibhav.pandey@gmail.com' });
      expect(response.status).toBe(200);
      expect(response.body.type).toBeDefined();
      expect(response.body.type).toBe('free');
    });

    it('returns email as "business"', async () => {
      const response = await request(app.callback())
        .post('/email')
        .type('form')
        .send({ email: 'contact@vaibhavpandey.com' });
      expect(response.status).toBe(200);
      expect(response.body.type).toBeDefined();
      expect(response.body.type).toBe('business');
    });
  });

  describe('Test /password', () => {
    it('returns strength as "1"', async () => {
      const response = await request(app.callback())
        .post('/password')
        .type('form')
        .send({ password: '12345678' });
      expect(response.status).toBe(200);
      expect(response.body.strength).toBeDefined();
      expect(response.body.strength.value).toBeDefined();
      expect(response.body.strength.value).toBe(1);
    });

    it('returns strength as "5"', async () => {
      const response = await request(app.callback())
        .post('/password')
        .type('form')
        .send({ password: 'Rx3d@bf%$T59YU^q' });
      expect(response.status).toBe(200);
      expect(response.body.strength).toBeDefined();
      expect(response.body.strength.value).toBeDefined();
      expect(response.body.strength.value).toBe(5);
    });
  });
});
