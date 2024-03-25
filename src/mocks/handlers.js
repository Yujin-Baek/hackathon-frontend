import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/short-links", async ({ request }) => {
    const { url } = await request.json();
    console.log('Creating new short URL for "%s"', url);
    return HttpResponse.json({
      data: {
        id: 1,
        shortUrl: "url-shortener/bf406",
        originUrl: url,
        hash: "bf406",
        createdAt: "2021-06-07T11:38:16+0000",
      },
    });
  }),

  http.get("/short-links", () => {
    return HttpResponse.json({
      data: {
        shortUrl: "url-shortener/bf406",
        originUrl:
          "https://medium.com/@hgbaek1128/querydsl%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%84%9C-pageable%EB%A1%9C-sorting%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-65c63ebaebd8",
        createdAt: "2021-06-07T11:38:16+0000",
      },
    });
  }),

  http.delete("/short-links/:id", ({ params }) => {
    const { id } = params;
    console.log('Deleting user with ID "%s"', id);
  }),
];
