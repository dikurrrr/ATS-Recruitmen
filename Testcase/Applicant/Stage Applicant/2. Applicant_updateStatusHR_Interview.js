const request = require('supertest');
const { updateStatusHR_interview } = require('../../../data/user/UpdateStage');
const { BASE_URL } = require('../../../data/url')
const data = require('../../../data/token.json')

describe("admin Update Status HR_Interview", () => {
  it("admin Succeed Update Status HR_Interview", async () => {
    const create = await request(`${BASE_URL}`)
    .put("/api/v1/applicants/status")
    .set("Authorization",`Bearer ${data.token}`)
    .send({...updateStatusHR_interview})
  //   .send({
  //     id: "d12e7c44-0287-43c1-8a26-6320f59de5f1",
  //     stage: "screening",
  //     note:"dikur test update stage screening" 
  // })

    expect(create.status).toBe(200);
    console.log(create.body)
  });


});