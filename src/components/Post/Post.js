import React, { useState } from 'react';
import postData from '../../data/db.json';
import './post.css';

const Post = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (postId) => {
    setSelectedPost(selectedPost === postId ? null : postId);
  };

  return (
    <div className="row">
      {postData.posts.map(post => (
        <div key={post.id} className="column">
          <div className="card" onClick={() => handlePostClick(post.id)}>
            <h3>{post.title}</h3>
            <h3>{post.time_read}</h3>
            <span>Clique para mais detalhes</span>
            {selectedPost === post.id && (
              <>
                <div>{post.body}</div>
                <ul>
                  {postData.comments.filter(comment => comment.post_id === post.id).map(comment => (
                    <li key={comment.id}>
                      <p>{comment.comment}</p>
                      <p>Por: {comment.username}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;