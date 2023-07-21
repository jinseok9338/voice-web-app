import { useQuery } from "react-query";
import { ChatRoom } from "src/types/chatRoom";
import TokenManager from "src/utils/tokenManager";

const fetchChatRooms = async (): Promise<ChatRoom[]> => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/chats/chat_room`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TokenManager.getAccessToken()}`,
    },
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

const useGetChatRoomList = () => {
  return useQuery("chatRooms", fetchChatRooms);
};

export default useGetChatRoomList;
