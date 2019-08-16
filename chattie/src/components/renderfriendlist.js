import React from "react";

const RenderFriendList = ({ friendList }) => {
  const draw = friendList.map((friend, ind) => {
    const { username, img, last_seen, active } = friend;
    return (
      <div className="friend" key={ind}>
        <div className="img-container">
          <img src={img} alt={``} />
        </div>
        <div>
          <h5>{username}</h5>
          <h6>last seen: {last_seen}</h6>
        </div>
      </div>
    );
  });

  return draw;
};

export default RenderFriendList;
