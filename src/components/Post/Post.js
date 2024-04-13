import React, { useState } from 'react';
import postData from '../../data/db.json';
import './post.css'; 


const Post = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (postId) => {
    if (selectedPost === postId) {
      setSelectedPost(null); // Se o post clicado já estiver selecionado, deseleciona-o
    } else {
      setSelectedPost(postId); // Caso contrário, define o post clicado como selecionado
    }
  };

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {postData.posts.map(post => (
          <li key={post.id} onClick={() => handlePostClick(post.id)} style={{ cursor: 'pointer' }}>
            <h3>{post.title}</h3>
            {selectedPost === post.id && ( /* Renderiza os comentários apenas se o post estiver selecionado */
              <ul>
                {postData.comments.filter(comment => comment.post_id === post.id).map(comment => (
                  <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>Por: {comment.username}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;