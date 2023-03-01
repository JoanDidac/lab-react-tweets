import React from 'react';
import ProfileImage from './ProfileImage';
import Actions from './Actions';
import Message from './Message';
import Timestamp from './Timestamp';
import User from './User';


const Tweet = (props) => {
  const {tweet} = props;
  const {user ,timestamp ,message} = tweet;
  

console.log(props);
  return (
    
    <div className="tweet">
      <ProfileImage image={user.image} />
      <div className="body">
        <div className="top">
        <User userData={user} />
        <Timestamp time={timestamp} />
        </div>

        <Message message={message} ></Message>
        
        <Actions />
        
        </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}


export default Tweet;