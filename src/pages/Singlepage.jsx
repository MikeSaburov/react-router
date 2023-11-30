import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export const Singlepage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const goBack = () => navigate(-1);
  const goHome = () => navigate('/', { replace: true });
  useEffect(() => {
    axios({
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
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
      <button onClick={goBack}>Назад</button>

      {/* плохой вариант, лучше сделать через Link*/}
      <button onClick={goHome}>Домой</button>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Редактировать</Link>
        </>
      )}
    </div>
  );
};
