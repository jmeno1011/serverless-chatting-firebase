import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "firebaseInit";
import React, { useEffect, useState, useRef } from "react";
import Mesaage from "../Message/Mesaage";

export default function ChatBox() {
  const [messages, setMessages] = useState<any[]>([]);
  const scroll = useRef();
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
      console.log(sortedMessage);
      
      setMessages(sortedMessage);
    });

    return () => unsubscribe();
  }, []);
  return <div>
    <div>
      {
        messages?.map(message=>(
          <Mesaage key={message.id} message={message} />
        ))
      }
    </div>
  </div>;
}
