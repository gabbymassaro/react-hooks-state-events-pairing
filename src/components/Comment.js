import React, { useState } from "react";

function Comment({ user, comment }) {
  const [commentUpVote, setCommentUpVote] = useState((null))
  const [commentDownVote, setCommentDownVote] = useState((null))

  function onCommentUpVote() {
    const newUpVote = commentUpVote + 1
    setCommentUpVote(newUpVote)
  }

  function onCommentDownVote() {
    const newDownVote = commentDownVote + 1
    setCommentDownVote(newDownVote)
  }

  function onDelete(event) {
    console.log(event.target.value)
  }

  return (
    <div className="center-comment-section">
      <div className="comment-container">
        <button className="delete-button" onClick={onDelete}>❌</button>
        <ul>
          <li><strong>{user}</strong></li>
          <li>{comment}</li>
          <button onClick={onCommentUpVote}>{commentUpVote} ➕</button>
          <button onClick={onCommentDownVote}>{commentDownVote} ➖</button>
        </ul>
      </div>
    </div>
  )
}

export default Comment