import { useEffect } from "react";
import { deleteUrl, fetchUrls } from "./api/api";
import UrlItem from "./UrlItem";

export default function UrlList({ urls, setUrls }) {
  const handleDelete = async (hash) => {
    try {
      await deleteUrl(hash);
      const filteredUrls = urls.filter((url) => url.hash !== hash);
      setUrls(filteredUrls);
    } catch (error) {
      alert(`Error deleting URL: ${error.message.toString()}`);
      console.error("Error deleting URL:", error);
    }
  };

  const getUrls = async () => {
    try {
      const response = await fetchUrls();
      setUrls(response);
    } catch (error) {
      alert(`Error fetching URLs: ${error.message.toString()}`);
      console.error("Error fetching URLs:", error);
    }
  };

  useEffect(() => {
    getUrls();
  }, []);

  return (
    <ul>
      {urls.length === 0 && <p>No URLs</p>}
      {urls.length !== 0 &&
        urls.map((url) => (
          <UrlItem
            key={url.hash}
            url={url}
            handleDelete={() => handleDelete(url.hash)}
          />
        ))}
    </ul>
  );
}
