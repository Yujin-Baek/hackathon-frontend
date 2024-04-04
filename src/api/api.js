import axios from "axios";

export const createShortUrl = async (originUrl) => {
  try {
    const response = await axios.post("http://localhost:8080/short-links", {
      originUrl,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating short URL:", error);
  }
};

export const fetchUrls = async () => {
  try {
    const response = await axios.get("http://localhost:8080/short-links");
    return response.data;
  } catch (error) {
    console.error("Error fetching URLs:", error);
  }
};

export const deleteUrl = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/short-links/${id}`);
  } catch (error) {
    console.error("Error deleting URL:", error);
  }
};
