import { useState } from "react";
import UrlList from "./UrlList";
import UrlInput from "./UrlInput";

function App() {
  const [urls, setUrls] = useState([]);

  return (
    <div className="App">
      <h1>Short URL</h1>
      <UrlInput urls={urls} setUrls={setUrls} />
      <UrlList urls={urls} setUrls={setUrls} />
    </div>
  );
}

export default App;
