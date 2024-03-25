import { useState, useEffect } from "react";
import { fetchShortURL } from "./api/api";

export default function UrlList() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const getUrls = async () => {
      const response = await fetchShortURL();
      setUrls(response.data);
    };

    getUrls();
  }, []);

  return (
    <ul>
      {urls.map((url) => (
        <li key={url.shortUrl}>
          <div>{url.originUrl}</div>
        </li>
      ))}
    </ul>
  );
}
