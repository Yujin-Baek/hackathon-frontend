import { useEffect } from "react";
import { deleteShortUrl, fetchShortUrl } from "./api/api";

export default function UrlList({ urls, setUrls }) {
  const getUrls = async () => {
    const response = await fetchShortUrl();
    setUrls(response.data);
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
      {urls.map((url) => (
        <li key={url.shortUrl}>
          <a href="url.shortUrl">{url.shortUrl}</a>
          <button onClick={() => deleteUrl(url.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}
