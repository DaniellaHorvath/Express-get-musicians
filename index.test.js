// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");


describe('GET/musicians endpoint', () => {
    // Write your tests here
    it('should get all musicians', async () => {
        const response = await request(app).get("/musicians");
        expect(response.status).toBe(200);
            
    })

    it('tests the response data', async () => {
        const response = await request(app).get("/musicians");
        const responseData = JSON.parse(response.text);
        expect(responseData.Musician).toBe(Array);
    })
     
})

describe('GET/bands endpoint', () => {
    it('should get all musicians', async () => {
        const response = await request(app).get("/bands");
        expect(response.status).toBe(200);
            
    })

    it('tests the response data', async () => {
        const response = await request(app).get("/bands");
        const bandsData = JSON.parse(response.text);
        expect(bandsData.Band).toBe(Array);
    })

})