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
        <p>{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
}
