import React, { useState } from "react";
import Comment from "./Comment.js";
import { v4 as uuid } from "uuid";

function CommentList({ comments }) {
  const [showComments, setShowComments] = useState(true);
  const [commentList, setCommentList] = useState(comments)
  const [newComment, setNewComment] = useState("")

  function onHideClick() {
    setShowComments((show) => !show);
  }

  function handleValue(event) {
    setNewComment(event.target.value)
  }

  function addNewComment(event) {
    event.preventDefault()
    const newCommentList = ({
      id: uuid(),
      user: `User ${uuid()}`,
      comment: newComment
    })
    setCommentList([...commentList, newCommentList])
  }

  return (
    <div>
      <br />
      <form onSubmit={addNewComment}>Add New Comment:
        <input onChange={handleValue}></input>
      </form>
      <br />
      <button onClick={onHideClick}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      <hr />
      {showComments ? (
        <>
          <h2>{commentList.length} Comments</h2>
          <div>
            {commentList.map((comment) => (
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