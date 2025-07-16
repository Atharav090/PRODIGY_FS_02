import React, { useContext, useState } from "react";
import ChatContainer from "../components/ChatContainer";
import RightSidebar from "../components/RightSidebar";
import Sidebar from "../components/Sidebar";
import { ChatContext } from "../../context/ChatContext";

const HomePage = () => {
  const { selectedUser } = useContext(ChatContext);

  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div
        className={`w-full max-w-[1200px] h-[90vh] backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden relative grid ${
          selectedUser
            ? "md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]"
            : "md:grid-cols-[1fr_2fr]"
        }`}
      >
        <Sidebar />
        <ChatContainer />
        <RightSidebar />
      </div>
    </div>
  );
};

export default HomePage;
