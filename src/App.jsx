import { useEffect } from "react";
import { createShortURL, deleteShortURL, fetchShortURL } from "./api/api";

function App() {
  useEffect(() => {
    createShortURL(
      "https://medium.com/@hgbaek1128/querydsl%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%84%9C-pageable%EB%A1%9C-sorting%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-65c63ebaebd8"
    );
    fetchShortURL();
    deleteShortURL(1);
  }, []);

  return <div className="App">App</div>;
}

export default App;
