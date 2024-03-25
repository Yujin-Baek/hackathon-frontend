import { useEffect } from "react";
import { deleteShortUrl, fetchShortUrl } from "./api/api";

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

  console.log(urls);

  return (
    <ul>
      {urls.length === 0 && <p>No URLs</p>}
      {urls.length !== 0 &&
        urls.map((url) => (
          <li key={url.shortUrl}>
            <div id="url-container">
              <p>longUrl</p>
              <a href="url.originUrl">{url.originUrl}</a>
              <p>shortUrl</p>
              <a href="url.shortUrl">{url.shortUrl}</a>
            </div>
            <button id="delete-button" onClick={() => deleteUrl(url.id)}>
              x
            </button>
          </li>
        ))}
    </ul>
  );
}
