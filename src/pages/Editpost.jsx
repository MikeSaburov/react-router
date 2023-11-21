import React from 'react';
import { useParams } from 'react-router-dom';

export const Editpost = () => {
  const { id } = useParams();
  return <div>{`Edit ${id}`}</div>;
};
