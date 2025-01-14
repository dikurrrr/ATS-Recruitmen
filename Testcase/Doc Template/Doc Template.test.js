const request = require('supertest');
const { BASE_URL } = require('../../data/url')
const {createTemplate} = require('../../data/user/createTemplate')
const data = require('../../data/token.json')

describe("admin Create Template Doc", () => {
  it("admin Create Template Doc", async () => {
    const create = await request(`${BASE_URL}`)
    .post("/api/v1/doc_templates")
    .set("Authorization",`Bearer ${data.token}`)
    .send({...createTemplate})

    expect(create.status).toBe(200);
    console.log(create.body)
  });
});

describe("admin get List Job", () => {
    it("admin Succeed get List Jobs", async () => {
      const create = await request(`${BASE_URL}`)
      .get("/api/v1/doc_templates")
      .set("Authorization",`Bearer ${data.token}`)
  
      expect(create.status).toBe(200);
      console.log(create.body)
    });
  });

  describe("admin get List Job", () => {
    it("admin Succeed get List Jobs", async () => {
      const create = await request(`${BASE_URL}`)
      .get("/api/v1/doc_templates/2b1c77e0-a806-492e-88dd-025317964700")
      .set("Authorization",`Bearer ${data.token}`)
  
      expect(create.status).toBe(200);
      console.log(create.body)
    });
  });