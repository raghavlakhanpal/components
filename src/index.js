import React from "react";
import ReactDOM from "react-dom/client";
import { faker } from "@faker-js/faker";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="Avatar Image" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Raghav
          </a>
          <div className="metadata">
            <span className="date">Evening 06:28PM</span>
          </div>
          <div className="text">Nice Comment Sction.</div>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
