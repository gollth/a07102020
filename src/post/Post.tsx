import React, { useContext } from 'react';
import { ThemeContext } from '../contexts';
import { Link } from "react-router-dom";
import PostInterface from "./postInterface";

export default function Post(post: PostInterface) {
  const { secondaryColor } = useContext(ThemeContext);
  return (
    <div>
      <h3 style={{ color: secondaryColor }}>
        <Link to={`/post/${post.slug}`}>{post.title}</Link>
      </h3>
      <Link to={`/post/edit/${post.slug}`}>Edit</Link>&nbsp;
      <Link to={`/post/delete/${post.slug}`}>Delete</Link>&nbsp;
      <br />
      {post.slug}<br/>
      <div>{post.content}</div>
      <div>{post.created}</div>
      <br />
      <i>Written by <b>{post.author}</b></i>
    </div>
  );
}