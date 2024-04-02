import axios from "axios";

export const createShortUrl = async (originalUrl) => {
  try {
    const response = await axios.post("http://localhost:8080/short-links", {
      originalUrl,
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

export const deleteUrl = async (hash) => {
  try {
    await axios.delete(`http://localhost:8080/short-links/${hash}`);
  } catch (error) {
    console.error("Error deleting URL:", error);
  }
};
