"use client";

import { useChat } from "ai/react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: `${process.env.NEXT_PUBLIC_BACKEND_URL}/ai/chat`,
    streamMode: "text",
  });

  return (
    <div className="dir-rtl mx-auto w-full max-w-md py-24 flex flex-col stretch gap-4 ">
      {messages.map((message) => (
        <div
          key={message.id}
          className="whitespace-pre-wrap bg-white rounded-md p-2 shadow-md"
        >
          {message.role === "user" ? "المستخدم: " : "المجيب: "}
          {message.content}
        </div>
      ))}
      <form onSubmit={handleSubmit} className="gap-1  bottom-0 py-4 inset">
        <input
          name="prompt"
          value={input}
          onChange={handleInputChange}
          id="input"
          className="w-full bottom-0 border border-gray-300 border-solid p-2 rounded-md p-2"
          placeholder="اكتب شيئاً..."
        />
      </form>
    </div>
  );
}
