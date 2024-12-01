const request = require('supertest');
const { createUser } = require('../../data/user/createUser');
const { updateUser } = require('../../data/user/updateUser');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("Superadmin Create user", () => {
  it("admin succeed Create user", async () => {
    const create = await request(`${BASE_URL}`)
    .post("/api/v1/user")
    .set("Authorization",`Bearer ${data.token}`)
    .send({...createUser})

    //expect(create.status).toBe(201);
    expect(create.status).toBe(201);
    console.log(create.body)
  });

});

describe("Get user by PrivyID", () => {
    it("admin succeed get user by PrivyID", async () => {
      const create = await request(`${BASE_URL}`)
      .get("/api/v1/profile")
      //.set("Authorization",`Bearer eyJhbGciOiJSUzUxMiIsImtpZCI6Ik9ZZjZyREVlb3VvRUZtMUxQOXFwanplOGQ1X0FGUGJSSV9IamFDUEpYTHcifQ.eyJpc3MiOiJQcml2eUlEIFByb3ZpZGVyIiwic3ViIjoiUHJpdnlJRCBQcm92aWRlciIsImlhdCI6MTY5MDE5NjUyMCwiZXhwIjoxNjkwMjAzNzIwLCJqdGkiOiIzYzNhNjdmMy1mYWYyLTQ2NzYtYjRhYS1iY2VmOTYxOWMxM2QiLCJ1aWQiOiJEU1M1Njc4IiwidXNlciI6eyJwcml2eUlkIjoiRFNTNTY3OCIsInV1aWQiOiJmZjM5MzU3ZC1kY2E2LTRjYzQtOWEzYS0wNmNlM2NhNWRhN2UifSwiY2xhaW1zIjpbInB1YmxpYyIsInJlYWQiLCJ3cml0ZSJdfQ.iZqT4A85yV0H7B4vc3exQCLFIa4QNj5y-c06J_GMlDb44I63dp814DSKDM2keOmq5mke5e20_2UHLCYy5-63B5Pld4w2Uj3bPgLrEDlcSrEPYyzAnHtzOgQRILfmd0aEgC73W0rHe18r565Z0pimgv3NT9fk3V8buJrW8a6Jtg7xsQ42oXOht-UACDKteJS_zlSlEDZAau66vGYMHvHTYW7GHY-7e98kPJ9OeYrPq0ipToZDElmNmWU10JDt47HqDWwoKrFetCKC0jfTjg7NJbjynOMK5YWuZpaRB-kIWlB9HiliPvruoPC8u3PgTWD4Y7nJlHqCglEANnMVLedxGA`)
      .set("Authorization",`Bearer ${data.token}`)
  
      expect(create.status).toBe(200);
      console.log(create.body)
    });
  });

  describe("admin get List All User", () => {
    it("admin succeed get List All User", async () => {
      const create = await request(`${BASE_URL}`)
      .get("/api/v1/user")
      .set("Authorization",`Bearer ${data.token}`)
  
      expect(create.status).toBe(201);
      console.log(create.body)
    });
  });

  describe("admin Update User", () => {
    it("admin succeed Update User", async () => {
      const create = await request(`${BASE_URL}`)
      .put("/api/v1/user/f3f3aa3d-766f-4a8d-a010-e46cfca9ec32")
      .set("Authorization",`Bearer ${data.token}`)
      .send({...updateUser})
  
      expect(create.status).toBe(200);
      console.log(create.body)
    });
  });