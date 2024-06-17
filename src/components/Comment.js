import React, { useState } from "react";

function Comment({ user, comment }) {

  const [commentUpVote, setCommentUpVote] = useState((null))

  function onCommentUpVote() {
    const newUpVote = commentUpVote + 1
    setCommentUpVote(newUpVote)
  }

  const [commentDownVote, setCommentDownVote] = useState((null))

  function onCommentDownVote() {
    const newDownVote = commentDownVote + 1
    setCommentDownVote(newDownVote)
  }

  return (
    <ul>
      <li><strong>{user}</strong></li>
      <li>{comment}</li>
      <button onClick={onCommentUpVote}>{commentUpVote} ➕</button>
      <button onClick={onCommentDownVote}>{commentDownVote} ➖</button>
    </ul>
  )
}

export default Comment