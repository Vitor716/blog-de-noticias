import React from 'react';
import postData from '../../data/db.json';

const Post = () => {
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {postData.posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;