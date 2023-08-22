import React, { FormEvent, ChangeEvent, useState } from "react";

export default function SendMessage() {
  const [message, setMessage] = useState<string>("");

  const onMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onSendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(message.trim() === ""){
      console.log("Enter valid message");
      return
    }
    // const 
  };

  return (
    <form>
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        placeholder="type message..."
        value={message}
        onChange={onMessage}
      />
      <button type="submit">Send</button>
    </form>
  );
}
