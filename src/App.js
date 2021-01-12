import React from "react";
import "./style.css";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

export default function App() {
  return (
    <div className="UI Container Components">
    <ApprovalCard>
      <CommentDetail name="Nikita Dutta" cmnt="Awesome Post!" time="[Today at 6:00pm]"/>
      </ApprovalCard>
      <hr />
       <ApprovalCard>
      <CommentDetail name="Goutam Dutta" cmnt="Woowww!" time="[Today at 8:00pm]"/>
       </ApprovalCard>
       <hr />
        <ApprovalCard>
      <CommentDetail name="Isani Dutta" cmnt="Awestruck!" time="[Today at 10:00pm]"/>
       </ApprovalCard>
       <hr />
    </div>
  );
}
