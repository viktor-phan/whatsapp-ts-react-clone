import { Avatar } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import db from "./firebase";
import "./SidebarChat.css";
interface MyProps {
  addNewChat?: boolean;
  id: string | undefined;
  name: string;
}
function SidebarChat({ addNewChat, id, name }: MyProps) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000).toString());
  }, []);
  const createChat = () => {
    const roomName = prompt("Please enter the name for the chat");
    if (roomName) {
      //do something to database
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };
  return !addNewChat ? (
    <Link to={`/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat__info">
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
