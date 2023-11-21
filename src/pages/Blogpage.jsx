import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Blogpage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios({
      url: 'https://jsonplaceholder.typicode.com/posts?_limit=50',
    })
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert('не удалось получить данные');
      });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </div>
  );
};
