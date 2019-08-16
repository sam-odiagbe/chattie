import React from "react";

const RenderActiveFriendsList = ({ activeFriends }) => {
  const draw = activeFriends.map((friend, ind) => {
    const { img, active, username } = friend;
    return (
      <div className="active-friend" key={ind}>
        <div className="img-container">
          <img src={img} alt={``} />
          <span className="active-indicator" />
        </div>
        <h5>{username}</h5>
      </div>
    );
  });

  return draw;
};

export default RenderActiveFriendsList;
