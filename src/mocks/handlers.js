import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/auth", () => {
    // Note that you DON'T have to stringify the JSON!
    return HttpResponse.json({
      user: {
        id: "abc-123",
        name: "John Maverick",
      },
    });
  }),
];
