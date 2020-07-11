import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import faker from 'faker'
import CommentDetail from './components/Commentdetail';
import {ApprovalCard} from './components/ApprovalCard';


function App() {
  return (
    <React.Fragment>
      <ApprovalCard>
        <h4>Warning!</h4>
        <p>Are you sure you want to do this?</p>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam" 
          comment="Nice Blog post" 
          time="today at 6:00PM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
        
      <ApprovalCard>
        <CommentDetail
          author="ham" 
          comment="Nice Blog post" 
          time="today at 5:00PM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
     
     <ApprovalCard>
      <CommentDetail
          author="Ram" 
          comment="Nice Blog post" 
          time="today at 4:00PM"
          avatar={faker.image.avatar()} 
      />
     </ApprovalCard>
      
    </React.Fragment>
    
    
  );
}

export default App;
