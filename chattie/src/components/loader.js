import React from "react";

const Loader = ({ message }) => {
  return (
    <div className="loading">
      <h1>Chattie&trade;</h1>
      <div className="lds-facebook">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
