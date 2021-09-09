const request = require('supertest');
const app = require('../app');

describe('Matiere EndPoints', () => {
    describe('GET /matieres', () => {
        it('should fetch matieres list', async() => {
            const res = await request(app).get('/matieres')
            expect(res.statusCode).toEqual(200)
            expect(res.body.length).toBeGreaterThanOrEqual(0)
        });
    });
});