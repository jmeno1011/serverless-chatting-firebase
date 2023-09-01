import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  FormEvent,
} from "react";
import { useParams } from "react-router-dom";
import styles from "./ChatRoom.module.css";
import { ChatBox, Header, SendMessage } from "components/Home";
import { Message } from "types/chat";
import { auth, db } from "firebaseInit";
import {
  addDoc,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

export default function ChatRoom() {
  const { room } = useParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");
  const scroll = useRef<HTMLDivElement>(null);

  const onMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() === "") {
      console.log("Enter valid message");
      return;
    }
    if (auth.currentUser) {
      const { uid, displayName } = auth.currentUser;
      await addDoc(collection(db, `chat/${room}`), {
        text: message,
        name: displayName,
        createdAt: serverTimestamp(),
        uid,
      });
    }
    setMessage("");
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const q = query(
      collection(db, `message`),
      orderBy("createdAt", "desc"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages: any[] = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessage = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessage);
      // TODO: scroll 내려가게 하기
    });
    if (scroll.current) {
      scroll.current.scrollIntoView({ behavior: "smooth" });
      scroll.current.scrollTop = scroll.current.scrollHeight;
      console.log("scroll.current.scrollHeight:", scroll.current.scrollHeight);
    }

    return () => unsubscribe();
  }, [messages]);
  return (
    <div>
      <div className={styles.chatRoom}>
        <Header room={room} />
        <div className={styles.chattingBox}>
          <ChatBox messages={messages} scroll={scroll} />
          <SendMessage
            message={message}
            onMessage={onMessage}
            onSendMessage={onSendMessage}
          />
        </div>
      </div>
    </div>
  );
}
