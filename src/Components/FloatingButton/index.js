// components/FloatingButtons.js
import React from "react";
import { Phone, MessageCircle, MessageSquare } from "lucide-react"; // dùng icon từ lucide-react
import "./index.css";

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a href="tel:0764747160" className="circle-button phone" title="Gọi điện">
        <Phone size={23} />
      </a>
      <a
        href="sms:0764747160"
        target="_blank"
        rel="noopener noreferrer"
        className="circle-button messenger"
        title="Gửi tin nhắn SMS"
      >
        <MessageSquare size={23} />
      </a>
      <a
        href="https://zalo.me/0764747160"
        target="_blank"
        rel="noopener noreferrer"
        className="circle-button zalo"
        title="Zalo"
      >
        <img
          src="https://images.vietnamluxtour.com/uploads/Logo-zalo-png.png"
          alt="Logo"
          style={{ width: "25px", height: "25px" }}
        />
      </a>
    </div>
  );
};

export default FloatingButtons;
