import { ChatRoom } from "src/types/chatRoom";

interface ChatRoomBoxProps {
  room: ChatRoom;
}

const ChatRoomBox = ({ room }: ChatRoomBoxProps) => {
  return (
    <div
      key={room.id}
      className="flex items-start justify-center bg-gray-300 shadow-md rounded-lg p-4"
    >
      <img
        src={room.avatar ?? "https://loremflickr.com/120/120"}
        alt={room.name}
        className="w-14 h-14 rounded-full mr-5 mt-1"
      />
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold text-gray-800">{room.name}</h2>
        <p className="text-gray-500">{room.last_message}</p>
      </div>
    </div>
  );
};

export default ChatRoomBox;
