import React, { useState, useContext, useEffect } from 'react';
import { ChangeEvent, FormEvent } from 'react';
import { ThemeContext } from '../contexts';
import { useHistory } from 'react-router-dom';
import flashMessage from '../FlashMessage';
import PostInterface from './postInterface';
import { MessageType } from './PostMessage';

interface PostFormProps {
  post?: PostInterface,
  username: string,
  posts: PostInterface[],
  setPosts(posts: PostInterface[]): any,
  setPostMessage(message: MessageType): any
};

export default function PostForm({ post, username, posts, setPosts, setPostMessage }: PostFormProps) {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [err, setErr] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  function handleTitle(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }
  function handleContent(e: ChangeEvent<HTMLTextAreaElement>) {
    setContent(e.target.value);
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (post) {
      handleUpdate();
    } else {
      handleCreate();
    }
  }
  function handleCreate() {
    if (title === '') { setErr('Title is needed'); }
    else if (content === '') { setErr('Content is needed'); }
    else {
      setErr('');
      const created = (new Date()).toString().substring(0, 24);
      const slug = getNewSlug();
      const newPost: PostInterface = { title, content, author: username, slug, created };
      setPosts([newPost, ...posts]);
      setTitle('');
      setContent("");
      flashMessage('saved', setPostMessage);
    }
  }
  function handleUpdate() {
    if (post == null) { setErr('No post to update') }
    else if (title === '') { setErr('Title is needed'); }
    else if (content === '') { setErr('content is needed'); }
    else {
      post.title = title;
      post.content = content;
      const index = posts.findIndex(p => p.slug === post.slug);
      const otherPosts = posts.slice(0, index).concat(posts.slice(index + 1));
      const newPosts = [...otherPosts, post];
      history.push(`/post/${post.slug}`);
      setPosts(newPosts);
      flashMessage('updated', setPostMessage);
    }
  }

  function getNewSlug() {
    const slug = `${Date.now()}-${String(Math.random()).substring(2, 10)}`;
    return slug;
  }

  function noError() {
    return <><br /></>;
  }

  const { alertColor } = useContext(ThemeContext);
  const { generalPadding } = useContext(ThemeContext);
  const action = post ? 'Edit' : 'Add';
  return (
    <div style={{ padding: generalPadding }}>
      <form onSubmit={handleSubmit} style={{ margin: "5px", padding: 0 }}>
        <table>
          <thead>
            <tr>
              <td style={{ fontWeight: 'bold' }}>{action} post</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Author: </td>
              <td><b>{username}</b></td>
            </tr>
            <tr>
              <td><label htmlFor="create-title">Title:</label></td>
              <td><input type="text" name="create-title" id="create-title" value={title} onChange={handleTitle} /></td>
            </tr>
            <tr>
              <td> Comments<br /></td>
              <td><textarea value={content} onChange={handleContent} /></td>
            </tr>
            <tr>
              <td></td>
              <td><input type="submit" value="Save" /></td>
            </tr>
          </tbody>
        </table>
        <div style={{ color: alertColor }}>
          {err}
          {!err && noError()}
        </div>
        <hr />
      </form>
    </div>
  );
}