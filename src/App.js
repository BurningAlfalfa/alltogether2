import React, { Component } from "react";

import "./App.css";
/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      messages: [],
      textUser1: "",
      textUser2: "",
    };
  }

  addMessage = (text, userID) => {
    const message = { text, userID };
    this.setState({ messages: this.state.messages.concat(message) });
  };
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };
  handleChangeTextUser1 = (event) => {
    this.setState({ textUser1: event.target.value });
  };
  handleChangeTextUser2 = (event) => {
    this.setState({ textUser2: event.target.value });
  };
  onClickSendUser1 = () => {
    this.addMessage(this.state.textUser1, "user1");
  };
  onClickSendUser2 = () => {
    this.addMessage(this.state.textUser2, "user2");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">user1</div>

            <ul className="user-color1">
              {this.state.messages.map((message, index) => (
                <div
                  key={index}
                  className={
                    message.userID === "user1"
                      ? "message-sender"
                      : "message-recipient"
                  }
                >
                  <p>{`${message.userID}: ${message.text}`}</p>
                </div>
              ))}
            </ul>

            <div>
              <input
                value={this.state.textUser1}
                onChange={this.handleChangeTextUser1}
                type="text"
                className="form-control"
                placeholder="Enter your message..."
              />
              <div className="input-group-append">
                <button
                  className="btn submit-button"
                  disabled={this.isDisabled()}
                  onClick={this.onClickSendUser1}
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
          {console.log(this.state.messages)}
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">user2</div>
            <ul className="user-color2">
              {this.state.messages.map((message, index) => (
                <div
                  key={index}
                  className={
                    message.userID === "user2"
                      ? "message-sender"
                      : "message-recipient"
                  }
                >
                  <p>{`${message.userID}: ${message.text}`}</p>
                </div>
              ))}
            </ul>

            <div>
              <input
                value={this.state.textUser2}
                onChange={this.handleChangeTextUser2}
                type="text"
                className="form-control"
                placeholder="Enter your message..."
              />
              <div className="input-group-append">
                <button
                  className="btn submit-button"
                  disabled={this.isDisabled()}
                  onClick={this.onClickSendUser2}
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
