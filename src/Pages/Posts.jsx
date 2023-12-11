import React, { useContext } from 'react';
import { AppContext } from '../context';
import { fetchJSONPosts } from '../context/posts/api';

function PostsPage() {
  const { state, dispatch } = useContext(AppContext);
  const { loading, error, posts } = state?.postState;
  console.log(state);
  return (
    <div className='text-center'>
      <button
        onClick={() => fetchJSONPosts(dispatch)}
        className='bg-blue-600 border border-black text-white p-2 '
      >
        {loading ? 'Loading...' : 'Fetch Posts'}
      </button>

      {/* Do it in  Table */}
      {posts?.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsPage;
