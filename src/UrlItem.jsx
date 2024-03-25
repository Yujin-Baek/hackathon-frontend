import { FaRegCopy } from "react-icons/fa6";

export default function UrlItem({ url, handleDelete }) {
  const handleCopy = (shortUrl) => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied to clipboard!");
  };
  return (
    <li>
      <div id="url-container">
        <p>longUrl</p>
        <a href="url.originUrl">{url.originUrl}</a>
        <p>shortUrl</p>
        <div>
          <a href="url.shortUrl">{url.shortUrl}</a>
          <button id="copy-button" onClick={() => handleCopy(url.shortUrl)}>
            <FaRegCopy />
          </button>
        </div>
      </div>
      <button id="delete-button" onClick={() => handleDelete(url.id)}>
        x
      </button>
    </li>
  );
}
