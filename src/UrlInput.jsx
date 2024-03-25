import { useState } from "react";
import { createShortUrl } from "./api/api";

export default function UrlInput({ urls, setUrls }) {
  const [input, setInput] = useState("");

  const onChange = (event) => {
    setInput(event.target.value);
  };

  const onSubmit = async () => {
    const response = await createShortUrl(input);
    setUrls([...urls, response.data]);
  };

  return (
    <>
      <input
        onChange={onChange}
        value={input}
        type="text"
        placeholder="Please enter the long URL you want to shorten."
      />
      <button id="run-button" onClick={onSubmit}>
        Run
      </button>
    </>
  );
}
