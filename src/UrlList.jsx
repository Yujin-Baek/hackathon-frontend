import { useEffect } from "react";
import { fetchShortUrl } from "./api/api";

export default function UrlList({ urls, setUrls }) {
  const getUrls = async () => {
    const response = await fetchShortUrl();
    setUrls(response.data);
  };

  useEffect(() => {
    getUrls();
  }, []);

  return (
    <ul>
      {urls.map((url) => (
        <li key={url.shortUrl}>
          <a href="url.shortUrl">{url.shortUrl}</a>
        </li>
      ))}
    </ul>
  );
}
