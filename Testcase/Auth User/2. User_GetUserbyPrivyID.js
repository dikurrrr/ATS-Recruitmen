const request = require('supertest');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

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