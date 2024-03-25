import { useEffect } from "react";
import { deleteShortUrl, fetchShortUrl } from "./api/api";
import UrlItem from "./UrlItem";

export default function UrlList({ urls, setUrls }) {
  const handleDelete = async (id) => {
    await deleteShortUrl(id);
    const filteredUrls = urls.filter((url) => url.id !== id);
    setUrls(filteredUrls);
  };

  useEffect(() => {
    fetchShortUrl().then((urlList) => {
      setUrls(urlList);
    });
  }, []);

  return (
    <ul>
      {urls.length === 0 && <p>No URLs</p>}
      {urls.length !== 0 &&
        urls.map((url) => (
          <UrlItem key={url.id} url={url} handleDelete={handleDelete} />
        ))}
    </ul>
  );
}
