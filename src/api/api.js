export const createShortURL = async (url) => {
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

export const fetchShortURL = async () => {
  const response = await fetch("/short-links");
  const data = await response.json();
  return data;
};

export const deleteShortURL = async (id) => {
  const response = await fetch(`/short-links/${id}`, {
    method: "DELETE",
  });
  return response;
};
