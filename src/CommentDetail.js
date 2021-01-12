import React from "react";
import ReactDOM from "react-dom";

const CommentDetail = (props) => {
  return (
    <div className="Comments">
      <a href="/" className="avatar">
        <img
          alt="avatar"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.businessinsider.com%2F9-reasons-to-own-a-dog-2014-12&psig=AOvVaw2cXs3UXqWYy91IlemNQJuH&ust=1610487134912000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICmqKHqlO4CFQAAAAAdAAAAABAD"
        />
      </a>
      <div className="Contents">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">{props.time}</span>
        </div>
        <div className="text">{props.cmnt}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
