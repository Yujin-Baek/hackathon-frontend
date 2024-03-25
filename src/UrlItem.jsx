export default function UrlItem({ url, handleDelete }) {
  return (
    <li>
      <div id="url-container">
        <p>longUrl</p>
        <a href="url.originUrl">{url.originUrl}</a>
        <p>shortUrl</p>
        <a href="url.shortUrl">{url.shortUrl}</a>
      </div>
      <button id="delete-button" onClick={() => handleDelete(url.id)}>
        x
      </button>
    </li>
  );
}
