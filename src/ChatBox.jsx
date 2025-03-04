import { useState, useRef } from "react";
import ChatMessage from "./ChatMessage";

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  const inputRef = useRef();
  const chatEndRef = useRef();

  const handleSendMessage = () => {
    const text = inputRef.current.value;

    if (text === "") {
      return;
    }
    if (text.trim() === "") {
      return;
    }

    setMessages((prev) => [...prev, { text, sender: "user" }]); // Aggiungo il messaggio dell'utente

    inputRef.current.value = ""; // Resetto l'input
    chatEndRef.current.scrollIntoView({ behavior: "smooth" }); // Scrollo a fine pag

    // Simulo un messaggio di risposta automatica
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Risposta automatica!", sender: "bot" },
      ]);

      chatEndRef.current.scrollIntoView({ behavior: "smooth" }); // Scrollo a fine pag
    }, 2000);
  };

  return (
    <div className="w-fit block m-auto mt-4 p-4">
      <ChatMessage messages={messages} />
      {/* Questo div è la destinazione per lo scroll */}
      <span ref={chatEndRef} />
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Scrivi un messaggio..."
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <button onClick={handleSendMessage}>Invia</button>
      </div>
    </div>
  );
}
