import React, { Component } from "react";

import RenderConversation from "./renderconversation";
import RenderActiveFriendsList from "./renderactivefriends";
import RenderFriendList from "./renderfriendlist";
import RenderGroup from "./rendergroup";
import "../styles/chatground.css";

export default class ChatGround extends Component {
  constructor() {
    super();

    this.state = {
      focused: false,
      conversations: [
        {
          sender: "me",
          img: "https://i.pravatar.cc/35?u=f",
          message: "hey how are you doing",
          time: "2 minutes ago"
        },
        {
          sender: "samsonosaro",
          img: "https://i.pravatar.cc/35",
          message: "I am doing great, and you",
          time: "4 minutes ago"
        },
        {
          sender: "samsonosaro",
          img: "https://i.pravatar.cc/35",
          message: "I sure know you had yourself some fun today",
          time: "5 minutes ago"
        },
        {
          sender: "me",
          img: "https://i.pravatar.cc/35?u=f",
          message: "you guessed right mate, so what about mellisa",
          time: "7 minutes ago"
        },
        {
          sender: "samsonosaro",
          img: "https://i.pravatar.cc/35",
          message: "mellisa is fine, she is right here with me",
          time: "8 minutes ago"
        },
        {
          sender: "me",
          img: "https://i.pravatar.cc/35?u=f",
          message: "Oh, tell her i said hi",
          time: "10 minutes ago"
        },
        {
          sender: "samsonosaro",
          img: "https://i.pravatar.cc/35",
          message:
            "our deepest fear is not that we are inadequate, our deepest fear is that we are powerful beyond measure, it is our light not our darkness that frightens us, your playing small does not serve the world, there is nothing about shrinking so that...",
          time: "10 minutes ago"
        },
        {
          sender: "me",
          img: "https://i.pravatar.cc/35?u=f",
          message:
            "our deepest fear is not that we are inadequate, our deepest fear is that we are powerful beyond measure, it is our light not our darkness that frightens us, your playing small does not serve the world, there is nothing about shrinking so that...",
          time: "10 minutes ago"
        },
        {
          sender: "samsonosaro",
          img: "https://i.pravatar.cc/35",
          message:
            "our deepest fear is not that we are inadequate, our deepest fear is that we are powerful beyond measure, it is our light not our darkness that frightens us, your playing small does not serve the world, there is nothing about shrinking so that...",
          time: "10 minutes ago"
        },
        {
          sender: "me",
          img: "https://i.pravatar.cc/35?u=f",
          message:
            "our deepest fear is not that we are inadequate, our deepest fear is that we are powerful beyond measure, it is our light not our darkness that frightens us, your playing small does not serve the world, there is nothing about shrinking so that...",
          time: "10 minutes ago"
        }
      ],
      activefriends: [
        {
          username: "thebossbaby",
          active: true,
          img: "https://i.pravatar.cc/45?u=f"
        },
        {
          username: "minion",
          active: true,
          img: "https://i.pravatar.cc/45?u=a"
        },
        {
          username: "drew",
          active: true,
          img: "https://i.pravatar.cc/45?u=e"
        },
        {
          username: "jerry",
          active: true,
          img: "https://i.pravatar.cc/45?u=b"
        },
        {
          username: "bigfoot",
          active: true,
          img: "https://i.pravatar.cc/45?u=c"
        },
        {
          username: "mufasa",
          active: true,
          img: "https://i.pravatar.cc/45?u=d"
        },
        {
          username: "simba",
          active: true,
          img: "https://i.pravatar.cc/45?u=e"
        },
        ,
        {
          username: "kiara",
          active: true,
          img: "https://i.pravatar.cc/45?u=g"
        }
      ],
      favourites: [],
      friends: [
        {
          username: "minion",
          active: false,
          img: "https://i.pravatar.cc/45?u=a",
          last_seen: "18:09"
        },
        {
          username: "jerry",
          active: false,
          img: "https://i.pravatar.cc/45?u=b",
          last_seen: "18:09"
        },
        {
          username: "bigfoot",
          active: false,
          img: "https://i.pravatar.cc/45?u=c",
          last_seen: "18:09"
        },
        {
          username: "mufasa",
          active: false,
          img: "https://i.pravatar.cc/45?u=d",
          last_seen: "18:09"
        },
        {
          username: "sammy",
          active: false,
          img: "https://i.pravatar.cc/45?u=e",
          last_seen: "18:09"
        },
        {
          username: "sammy",
          active: false,
          img: "https://i.pravatar.cc/45?u=f",
          last_seen: "18:09"
        }
      ],
      groups: [
        {
          name: "Developer Geeks",
          category: "Tech",
          img: "https://placeimg.com/45/45/tech"
        },
        {
          name: "Love Circle",
          category: "Relationships",
          img: "https://placeimg.com/45/45/sepia"
        },
        {
          name: "Everthing Sport",
          category: "Sport",
          img: "https://placeimg.com/45/45/animals"
        },
        {
          name: "We Bake too",
          category: "Food",
          img: "https://placeimg.com/45/45/architecture"
        },
        {
          name: "Amebo people",
          category: "news",
          img: "https://placeimg.com/45/45/people"
        },
        {
          name: "What's trending",
          category: "lifestyle",
          img: "https://placeimg.com/45/45/tech"
        },
        {
          name: "Tech it",
          category: "tech",
          img: "https://placeimg.com/45/45/nature"
        }
      ]
    };
  }

  render() {
    const { focused } = this.state;
    return (
      <div className="main">
        <div className="contact-list">
          <div className="friend-list">
            <div className="friends">
              <h5 style={{ padding: "10px 0" }}>Friends</h5>
              <RenderFriendList friendList={this.state.friends} />
            </div>
            <div className="groups">
              <div className="group-header">
                <h5 style={{ padding: "10px 0" }}>Groups</h5>
                <i className="fa fa-edit fa-lg" />
              </div>

              <RenderGroup groups={this.state.groups} />
            </div>
          </div>
        </div>
        <div className="chat-ground">
          <div className="chat-head">
            <div className="chat-head-left">
              <div className="img-container">
                <img src={"https://i.pravatar.cc/35"} alt="" />
              </div>

              <div>
                <h5>Samsonosaro</h5>
                <h6>online</h6>
              </div>
            </div>
            <div className="chat-head-right">
              <i className="fa fa-phone fa-lg" />
              <i className="fa fa-video-camera fa-lg" />
            </div>
          </div>
          <div className="chat-conversation">
            <RenderConversation conversations={this.state.conversations} />
          </div>
          <div className="chat-sender">
            <div
              className="sender-container"
              style={focused ? { border: "1px solid dodgerblue" } : {}}
            >
              <textarea
                onFocus={() => {
                  this.setState({
                    focused: true
                  });
                }}
                onBlur={() => {
                  this.setState({
                    focused: false
                  });
                }}
                placeholder="Enter your message (press enter to send)..."
              />
              <div className="actions">
                <button>
                  <i className="fa fa-image fa-lg" />
                </button>
                <button>
                  <i className="fa fa-paper-plane fa-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="active">
          <div className="active-friends-list">
            <h5 style={{ padding: "10px 0" }}>Active</h5>
            <RenderActiveFriendsList activeFriends={this.state.activefriends} />
          </div>
        </div>
      </div>
    );
  }
}
