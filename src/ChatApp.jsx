import ChatMessage from "./ChatMessage";
import { useState, useRef } from "react";
import useSWR, { mutate } from "swr";

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  const inputRef = useRef();
  const chatEndRef = useRef();

  // fetch per recuperare i messaggi del bot
  const {
    data: botAnswers,
    error,
    mutate,
  } = useSWR("https://mocki.io/v1/fd767045-ffbc-4e72-938a-bdf3bd439682");

  const handleSendMessage = async () => {
    const sentText = inputRef.current.value;

    // controlli sulla validità dei messaggi inviati dall'utente
    if (sentText === "") {
      return;
    }
    if (sentText.trim() === "") {
      return;
    }

    // Aggiungo il messaggio dell'utente
    setMessages((prev) => [...prev, { text: sentText, sender: "user" }]);

    inputRef.current.value = ""; // Resetto l'input
    chatEndRef.current.scrollIntoView({ behavior: "smooth" }); // Scrollo a fine pag

    // Se c'è un errore nel fetch, mostra un messaggio di errore
    if (error) {
      alert("Errore nel recupero delle risposte del bot.");
      return;
    }

    await mutate();

    // Simulo un messaggio random di risposta automatica
    setTimeout(() => {
      // Se ci sono risposte disponibili, scegli una risposta casuale
      if (botAnswers && botAnswers.length > 0) {
        const botResponse =
          botAnswers[Math.floor(Math.random() * botAnswers.length)].text;

        setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
      } else {
        // Se non ci sono risposte, mostriamo un messaggio di errore
        setMessages((prev) => [
          ...prev,
          { text: "Errore: nessuna risposta disponibile", sender: "bot" },
        ]);
      }

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
