import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

export const Blogpage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios({
      url: 'https://jsonplaceholder.typicode.com/posts?_limit=10',
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
      {posts.map((obj) => (
        <div className="container">
          <h3>{obj.title}</h3>
          <hr />
          <p>{obj.body}</p>
        </div>
      ))}
    </div>
  );
};
