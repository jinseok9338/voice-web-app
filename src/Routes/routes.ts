import ChatRoomList from "@pages/ChatRoomList";
import LoginPage from "../pages/Login";

export const routes = [
  {
    path: "/login",
    component: LoginPage,
    isProtected: false,
  },
  {
    path: "/",
    component: ChatRoomList,
    isProtected: true,
  },

  // Add more routes as needed
];
