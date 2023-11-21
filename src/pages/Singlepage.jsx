import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export const Singlepage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios({
      url: `https://jsonplaceholder.typicode.com/posts/${id}?_limit=50`,
    })
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert('не удалось получить данные');
      });
  }, [id]);
  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};
