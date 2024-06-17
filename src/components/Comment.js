import React from "react";

function Comment({ user, comment }) {

  return (
    <ul>
      <li><strong>{user}</strong></li>
      <li>{comment}</li>
    </ul>
  )
}

export default Comment