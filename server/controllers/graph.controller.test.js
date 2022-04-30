const request = require("supertest");

const server = require("../app");

describe("Tests for adding node and edges", () => {
  test("Test For Adding A Node", async () => {
    const response = await request(server).post("/v1/graph/node").send({
      nodeValue: 0,
    });
    expect(response.statusCode).toBe(201);
  });
  test("Test For Adding A Node", async () => {
    const response = await request(server).post("/v1/graph/node").send({
      nodeValue: 1,
    });
    expect(response.statusCode).toBe(201);
  });

  test("It Should Respond With 201 Created", async () => {
    const response = await request(server).post("/v1/graph/edge").send({
      src: 0,
      dest: 1,
    });
    expect(response.statusCode).toBe(201);
  });
  test("Test For Getting Page Rank", async () => {
    const response = await request(server)
      .get("/v1/page-rank")
      .query({ val: 0 });

    expect(response.statusCode).toBe(200);
  });
});
