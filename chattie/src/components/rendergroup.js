import React from "react";

const RenderGroups = ({ groups }) => {
  const draw = groups.map((group, ind) => {
    const { name, category, img } = group;
    return (
      <div className="group" key={ind}>
        <div className="img-container">
          <img src={img} alt={`${name}'s profile`} />
        </div>
        <div>
          <h5>{name}</h5>
          <h6>{category}</h6>
        </div>
      </div>
    );
  });

  return draw;
};

export default RenderGroups;
