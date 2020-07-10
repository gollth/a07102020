import React from 'react';

export type MessageType = keyof typeof MESSAGES;

const MESSAGES = {
  saved: " Post has been saved",
  created: " Pst has been created",
  deleted: " Post has been deleted",
  updated: " Post has been updated"
};

const PostMessage = ({ type }: { type: MessageType }) => {
  return (
    <div className={`App-message ${type}`}>
      <strong style={{ color: 'green', fontStyle: 'italic' }}>&nbsp;{MESSAGES[type]}</strong>
      <br /><br />
    </div>
  );
};

export default PostMessage;