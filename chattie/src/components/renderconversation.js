import React from "react";

const RenderConversation = ({ conversations }) => {
  const draw = conversations.map((msg, ind, arr) => {
    const { sender, img, message, time } = msg;
    return sender === "me" ? (
      <div className="msg-user" key={ind}>
        <div>
          <div className="chat-bubble">
            <p>{message}</p>
            <span>{time}</span>
          </div>
        </div>
        <div className="img-container">
          <img src={img} alt="" />
        </div>
      </div>
    ) : (
      <div className="msg-friend" key={ind}>
        <div className="img-container">
          <img src={img} alt="" />
        </div>
        <div>
          <div className="chat-bubble">
            <p>{message}</p>
            <span>{time}</span>
          </div>
        </div>
      </div>
    );
  });
  return draw;
};

export default RenderConversation;
