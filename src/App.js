import React, { useState } from 'react';

import PostList from './post/PostList';
import PostForm from './post/PostForm';
import Post from './post/Post.tsx';
import UserBar from './user/UserBar';
import Header from './Header';
import PostMessage from './post/PostMessage';
import { ThemeContext } from './contexts';
import ChangeTheme from './ChangeTheme';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import flashMessage from './FlashMessage';


export default function App() {
  const defaultPosts = [];
  const [username, setUsername] = useState('');
  const [usernameRegister, setUsernameRegister] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState(defaultPosts);
  const [theme, setTheme] = useState({
    primaryColor: 'blue',
    secondaryColor: 'brown',
    alertColor: 'red',
    blogTitleColor: 'DarkOrange',
    generalPadding: '10px'
  });
  const [postMessage, setPostMessage] = useState('');
  function findPost(posts, params) {
    return posts.find(post => post.slug === params.postSlug) || posts[0];
  }
  return (
    <ThemeContext.Provider value={theme} >
      <Router>
        <div className="App" style={{ paddingLeft: "10px" }}>
          <Header text='Welcome' />
          <PostMessage type={postMessage} setPostMessage={setPostMessage} />
          <ChangeTheme theme={theme} setTheme={setTheme} />
          <UserBar
            username={username} setUsername={setUsername}
            usernameRegister={usernameRegister} setUsernameRegister={setUsernameRegister}
            loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <br />
          <hr />
          <Switch>
            <Route exact path='/'
              render={() => {
                return (
                  <span>
                    {loggedIn &&
                      <PostForm
                        username={username}
                        posts={posts} setPosts={setPosts}
                        postMessage="saved" setPostMessage={setPostMessage} />
                    }
                    {loggedIn && <PostList posts={posts} /> }
                  </span>
                );
              }}
            />
            <Route exact path='/post/:postSlug'
              render={({ match: { params } }) => {
                const currentPost = findPost(posts, params);
                return (
                  <span>
                    <Post {...currentPost} />
                    <br />
                    <Link to='/'>All Posts</Link>&nbsp;&nbsp;
                    <Link to='/'>Create Post</Link>
                  </span>
                );
              }}
            />
            <Route exact path='/post/delete/:postSlug'
              render={({ match: { params } }) => {
                const currentPost = findPost(posts, params);
                const newPosts = posts.filter(p => p.slug !== currentPost.slug);
                setPosts(newPosts);
                flashMessage('saved', setPostMessage);
                return <Redirect to="/" />;
              }}
            />
            <Route path='/post/edit/:postSlug'
              render={({ match: { params } }) => {
                const post = findPost(posts, params);
                if (post) {
                  return (
                    <span>
                      <PostForm
                        post={post}
                        username={username}
                        posts={posts} setPosts={setPosts}
                        setPostMessage={setPostMessage} />
                      <br />
                      <Link to='/'>All Posts</Link>
                    </span>
                  );
                }
                return <Redirect to="/" />;
              }}
            />
          </Switch>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}