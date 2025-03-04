export default function ChatMessage({ messages }) {
  return (
    <div className="flex flex-col">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={msg.sender === "user" ? "self-end" : "self-start"}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}
