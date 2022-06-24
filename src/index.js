//Import resources ```````````````````````````````````````````````````````````

import React from "react";
import ReactDOM from "react-dom/client";

import { faker } from "@faker-js/faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

//Create Content ```````````````````````````````````````````````````````````

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>Are you sure You want to do this?!</ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Raghav"
          timeAgo="Today at 9:00PM"
          commentText="Hey! Nice!!"
          avatarImage={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Lovish"
          timeAgo="Today at 12:41AM"
          commentText="This Blog looks good."
          avatarImage={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Foofla"
          timeAgo="Yesterday at 4:11PM"
          commentText="Foooflaa!!"
          avatarImage={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

//Display ```````````````````````````````````````````````````````````
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
