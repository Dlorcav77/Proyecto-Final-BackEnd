import request from "supertest";
import server from "../index.js";
import { signJWT } from "../utils/jwt.utils.js";


describe("Test operations for users routes", () => {

  it("POST /users returns an statusCode 201 and adds a new user", async () => {
    const randomizeEmailId = Math.floor(Math.random() * 999);
    const testUser = {
      'name': 'test',
      'lastName': 'testlastname',
      'email': `test${randomizeEmailId}@test.com`,
      'password': 'test',
      'img_avatar': 'link-img'
    };

    const response = await request(server).post("/api/v1/users").send(testUser);
    const status = response.statusCode;


    expect(status).toBe(201)
  })

  it("GET /users/:id returns an statusCode 404 when searching for an inexistent id", async () => {
    const response = await request(server).get("/api/v1/users/7988").send();
    const status = response.statusCode;

    expect(status).toBe(404)
  })
})

describe("Test operations for favorites routes", () => {
  it("DELETE /favorites/id returns statusCode 401 when the Token is invalid", async () => {
    const randomizeId = Math.floor(Math.random() * 999)
    const response = await request(server).delete(`/api/v1/favorites/${randomizeId}`).set('Authorization', `Bearer token`).send()
    const status = response.statusCode;

    expect(status).toBe(401)
  })
})



describe("Test operations for rating", () => {
  it("DELETE /favorites/id returns statusCode 401 when the Token is invalid", async () => {
    const randomizeId = Math.floor(Math.random() * 999)
    const response = await request(server).delete(`/api/v1/favorites/${randomizeId}`).set('Authorization', `Bearer token`).send()
    const status = response.statusCode;

    expect(status).toBe(401)
  })
})


