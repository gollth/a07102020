import React from 'react';
import Post from './Post';
import PostInterface from './postInterface';

export default function PostList ( { posts }: { posts: PostInterface[]} ) {
  const sortedPosts = posts.sort((postA,postB) => {
    return Date.parse(postB.created) - Date.parse(postA.created);
  });
  
  return (
    <div>
      {sortedPosts.map((p, i) => (
        <React.Fragment key={'post-' + i}>
          <Post {...p} />
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
}
