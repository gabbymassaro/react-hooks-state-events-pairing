import React, { useState } from "react";
import Comment from "./Comment.js";

function CommentList({ comments }) {
  const [showComments, setShowComments] = useState(true);

  function onHideClick() {
    setShowComments((show) => !show);
  }

  return (
    <div>
      <br />
      <button onClick={onHideClick}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      <hr />
      {showComments ? (
        <>
          <h2>{comments.length} Comments</h2>
          <div>
            {comments.map((comment) => (
              <Comment
                key={comment.id}
                user={comment.user}
                comment={comment.comment}
              />
            ))}
          </div>
        </>
      ) : " "}
    </div>
  )
}

export default CommentList;