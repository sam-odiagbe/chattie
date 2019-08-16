import React, { Component } from "react";
import Auth from "./auth";
import ChatGround from "./chatground";
import classManipulation from "../store/helpers/classManipulation";

export default class Chattie extends Component {
  constructor() {
    super();
  }
  render() {
    const { user, logout } = this.props;
    const classname = user ? "auth-header" : "";
    return (
      <div className="chattie">
        <div className={classManipulation("header", classname)}>
          <div className="header-left">
            <h2>Chattie</h2>
          </div>
          <div className="header-right">
            {user && (
              <React.Fragment>
                <div className="img-container">
                  <img src="https://i.pravatar.cc/35?u=f" alt="" />
                </div>
                <div className="actions">
                  <i
                    className="fa fa-sign-out fa-lg"
                    style={{ marginLeft: "10px", cursor: "pointer" }}
                    onClick={() => {
                      logout();
                    }}
                  />
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
        <div className={"main-content"}>
          {!user ? <Auth /> : <ChatGround />}
        </div>
      </div>
    );
  }
}
