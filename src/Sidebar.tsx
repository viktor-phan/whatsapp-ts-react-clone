import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
function Sidebar() {
  const [rooms, setRooms] = useState<any[]>([]);
  const [{user}, dispatch] = useStateValue() as any;
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL}/>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start a new chat" type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat addNewChat name='' id=''/>
        {rooms.map((room, idx) => {
          return (
            <SidebarChat
              key={room.id}
              id={room.id}
              name={room.data.name}
              addNewChat={false}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Sidebar;
