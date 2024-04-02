import { useState } from "react";
import { createShortUrl } from "./api/api";

export default function UrlInput({ urls, setUrls }) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await createShortUrl(input);
      setUrls([...urls, response]);
    } catch (error) {
      alert(`Error creating short URL: ${error.message.toString()}`);
      console.error("Error creating short URL:", error);
    }
  };

  return (
    <div>
      <input
        onChange={handleChange}
        value={input}
        type="text"
        placeholder="Please enter the long URL you want to shorten."
      />
      <button id="run-button" onClick={handleSubmit}>
        Run
      </button>
    </div>
  );
}
