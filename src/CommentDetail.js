/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
//import { faker } from "@faker-js/faker";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="Avatar Image" src={props.avatarImage} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.commentText}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
