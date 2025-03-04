import { useState, useRef } from "react";
import ChatMessage from "./ChatMessage";

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  const inputRef = useRef();

  const handleSendMessage = () => {
    const text = inputRef.current.value.trim(); // Così mando solo il testo
    if (!text) return;

    setMessages((prev) => [...prev, { text, sender: "user" }]); // Aggiungo il messaggio dell'utente
    inputRef.current.value = "";

    // Simulo un messaggio di risposta automatica
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Risposta automatica!", sender: "bot" },
      ]);
    }, 2000);
  };

  return (
    <div className="w-fit">
      <ChatMessage messages={messages} />
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Scrivi un messaggio..."
        />
        <button onClick={handleSendMessage}>Invia</button>
      </div>
    </div>
  );
}
