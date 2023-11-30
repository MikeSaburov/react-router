import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Blogpage = () => {
  const [posts, setPosts] = useState([]);

  console.log(useLocation());

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
    <div className="container">
      <div>
        <Link to="/posts/new">
          <button>Создать пост</button>
        </Link>
      </div>
      <div>
        {posts.map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
      </div>
    </div>
  );
};
