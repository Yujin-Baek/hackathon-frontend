import axios from "axios";

export const createShortUrl = async (url) => {
  const response = await axios.post("/short-links", { url }).catch((error) => {
    alert("Error:", error);
  });
  return response.data;
};

export const fetchUrls = async () => {
  const response = await axios.get("/short-links").catch((error) => {
    alert("Error:", error);
  });
  return response.data;
};

export const deleteUrl = async (id) => {
  await axios.delete(`/short-links/${id}`).catch((error) => {
    alert("Error:", error);
  });
};
