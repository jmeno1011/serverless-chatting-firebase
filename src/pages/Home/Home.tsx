import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  FormEvent,
} from "react";
import { ChatBox, ChatList, Header, SendMessage } from "components/Home";
import { Message } from "types/chat";
import {
  addDoc,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "firebaseInit";
import styles from "./Home.module.css";
import { Outlet, useLocation } from "react-router-dom";

export default function Home() {
  const { pathname } = useLocation();
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
      await addDoc(collection(db, "message"), {
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
      collection(db, "message"),
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
    <div className={styles.container}>
      {pathname === "/" ? (
        <div className={styles.emptyRoom}>
          <h1>방을 선택해주세요~</h1>
        </div>
      ) : (
        <Outlet />
      )}
      {/* <div className={styles.chatRoom}>
        <Header />
        <div className={styles.chattingBox}>
          <ChatBox messages={messages} scroll={scroll} />
          <SendMessage
            message={message}
            onMessage={onMessage}
            onSendMessage={onSendMessage}
          />
        </div>
      </div> */}
    </div>
  );
}
