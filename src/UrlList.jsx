import { useEffect } from "react";
import { deleteUrl, fetchUrls } from "./api/api";
import UrlItem from "./UrlItem";

export default function UrlList({ urls, setUrls }) {
  const handleDelete = async (id) => {
    await deleteUrl(id);
    const filteredUrls = urls.filter((url) => url.id !== id);
    setUrls(filteredUrls);
  };

  useEffect(() => {
    fetchUrls().then((urlList) => {
      setUrls(urlList);
    });
  }, [setUrls]);

  return (
    <ul>
      {urls.length === 0 && <p>No URLs</p>}
      {urls.length !== 0 &&
        urls.map((url) => (
          <UrlItem
            key={url.id}
            url={url}
            handleDelete={() => handleDelete(url.id)}
          />
        ))}
    </ul>
  );
}
