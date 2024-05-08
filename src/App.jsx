import { useState } from "react";
import UrlList from "./UrlList";
import UrlInput from "./UrlInput";

function App() {
  const [urls, setUrls] = useState([]);

  return (
    <div id="App">
      <h1>URL Shortener</h1>
      <UrlInput urls={urls} setUrls={setUrls} />
      <UrlList urls={urls} setUrls={setUrls} />
    </div>
  );
}

export default App;
