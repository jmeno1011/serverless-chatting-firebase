import React from "react";
import styles from "./Mesaage.module.css";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { RootState } from "store";

const cn = classNames.bind(styles);

interface MessageProps {
  message: any;
}

export default function Mesaage({ message }: MessageProps) {
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <div className={cn("container", message.uid === user && "right")}>
      <div className={styles.message}>
        {message.uid === user ? null : <div className={styles.avatar}></div>}
        <div>
          {message.uid === user ? null : (
            <p className={styles.name}>{message.name}</p>
          )}
          <p className={cn("text", message.uid === user && "messageRight")}>
            {message.text}
          </p>
        </div>
      </div>
    </div>
  );
}
