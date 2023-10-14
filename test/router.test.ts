import request from "supertest";
import app from "../lambda/src/router";

describe("hello", () => {
  it("get hello", async () => {
    const res = await request(app).get("/hello");

    expect(res.body).toEqual({
      message: "Hello",
    });
    expect(res.status).toBe(200);
  });
});
