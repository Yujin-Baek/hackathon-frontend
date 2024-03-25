import { useState, useEffect } from "react";
import { fetchShortUrl } from "./api/api";

export default function UrlList() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const getUrls = async () => {
      const response = await fetchShortUrl();
      setUrls(response.data);
    };

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
