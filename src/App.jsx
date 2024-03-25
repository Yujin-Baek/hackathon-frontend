import { useState } from "react";
import UrlList from "./UrlList";
import ShortenUrlInput from "./ShortenUrlInput";

function App() {
  const [urls, setUrls] = useState([]);

  return (
    <div className="App">
      <ShortenUrlInput urls={urls} setUrls={setUrls} />
      <UrlList urls={urls} setUrls={setUrls} />
    </div>
  );
}

export default App;
