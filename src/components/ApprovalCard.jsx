import React from 'react';

export const ApprovalCard = (props) => {
  console.log(props);
  return (
    <div className="ui card">
      <div className="content">
        {props.children}
      </div>
      <div className="extra comment">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
  );
};