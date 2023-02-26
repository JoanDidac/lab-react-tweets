import React from 'react';
import ProfileImage from './ProfileImage';
import Actions from './Actions';
import Message from './Message';
import Timestamp from './Timestamp';
import User from './User';
import tweetsArray from '../App';


function Tweet(props) {

  const {tweetsArray} = props;

  return (
    <div className="tweet">
      <ProfileImage image={tweetsArray.user.image} />

      <div className="body">


        <div className="top">
        <User userData={tweetsArray.user} />
        <Timestamp key={tweetsArray.timestamp} />
        </div>

        <Message info={tweetsArray.message} />
        <Actions />
        </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}


export default Tweet;