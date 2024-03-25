import { useEffect } from "react";
import { deleteShortUrl, fetchShortUrl } from "./api/api";
import UrlItem from "./UrlItem";

export default function UrlList({ urls, setUrls }) {
  const getUrls = async () => {
    const response = await fetchShortUrl();
    setUrls(response);
  };

  const deleteUrl = async (id) => {
    await deleteShortUrl(id);
    const filteredUrls = urls.filter((url) => url.id !== id);
    setUrls(filteredUrls);
  };

  useEffect(() => {
    getUrls();
  }, []);

  return (
    <ul>
      {urls.length === 0 && <p>No URLs</p>}
      {urls.length !== 0 &&
        urls.map((url) => (
          <UrlItem key={url.id} url={url} deleteUrl={deleteUrl} />
        ))}
    </ul>
  );
}
