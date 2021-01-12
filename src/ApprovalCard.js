import React from "react";
import ReactDOM from "react-dom";

const ApprovalCard = (props) => {
  return(
<div className="UI card">
<div className="Content">{props.children}</div>
<div className="extra content">
<div className="ui two buttons">
<div className="green button">Approve</div>
<div className="red button">Reject</div>
</div>
</div>
</div>
  );
}

export default ApprovalCard;