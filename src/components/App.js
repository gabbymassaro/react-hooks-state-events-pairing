import video from "../data/video.js";

import React, { useState } from "react";

import CommentList from './CommentList.js'

function App() {

  const [upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)

  function onUpVote() {
    const newUpVote = upVotes + 1
    setUpVotes(newUpVote)
  }

  function onDownVote() {
    const newDownVote = downVotes + 1
    setDownVotes(newDownVote)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dpw9EHDh2bM"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <button onClick={onUpVote}>{upVotes} 👍</button>
      <button onClick={onDownVote}>{downVotes} 👎</button>
      <CommentList comments={video.comments}/>
    </div>
  );
}

export default App;
