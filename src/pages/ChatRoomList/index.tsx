import React from "react";
import useGetChatRoomList from "./hooks/useGetChatRoomList";
import ChatRoomBox from "./components/chatRoomBox";
import Wrapper from "./components/chatRoomWrapper";

const ChatRoomList = () => {
  const { data: rooms, isLoading, error, refetch } = useGetChatRoomList();

  return (
    <Wrapper isLoading={isLoading}>
      <h1 className="text-3xl font-bold mb-4 text-gray-200">Chat Rooms</h1>
      {rooms?.map((room) => (
        <ChatRoomBox key={room.id} room={room} />
      ))}
    </Wrapper>
  );
};

export default ChatRoomList;
