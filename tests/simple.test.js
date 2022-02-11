const app = require("../index");
const supertest = require("supertest");
const request = supertest(app);

describe("test endpoint", () => {
    test("Deve retornar Hello World!", async () => {
        const response = await request.get("/")
        
        expect(response.status).toBe(200)
        expect(response.text).toBe("Hello World!");

        app.close();
    })
})