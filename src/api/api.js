export const createShortUrl = async (url) => {
  const response = await fetch("/short-links", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });
  const data = await response.json();
  return data;
};

export const fetchUrls = async () => {
  const response = await fetch("/short-links");
  const data = await response.json();
  return data;
};

export const deleteUrl = async (id) => {
  const response = await fetch(`/short-links/${id}`, {
    method: "DELETE",
  });
  return response;
};
