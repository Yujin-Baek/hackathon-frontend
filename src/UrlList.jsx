import { useEffect } from "react";
import { deleteUrl, fetchUrls } from "./api/api";
import UrlItem from "./UrlItem";

export default function UrlList({ urls, setUrls }) {
  const handleDelete = async (hash) => {
    await deleteUrl(hash);
    const filteredUrls = urls.filter((url) => url.hash !== hash);
    setUrls(filteredUrls);
  };

  useEffect(() => {
    fetchUrls().then((urlList) => {
      setUrls(urlList);
    });
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
