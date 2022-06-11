const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");

const request = supertest(customExpress());

jest.mock("../src/repositorios/endereco");

describe("API de endereço", () => {
  //GET listar ufs
  test("Listar ufs", async () => {
    const resp = await request.get("/ufs");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual(["RO", "AC", "AM"]);
  });

  ////GET listar municipios
  test("Listar municipios", async () => {
    const resp = await request.get("/ufs/ro/municipios");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual([
      "Ariquemes",
      "Cabixi",
      "São Francisco do Guaporé",
    ]);
  });
});
