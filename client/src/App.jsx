import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getPosts } from "./store/actions/postsActions.js";
import PostList from './components/PostList.jsx';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <div>
      work
      <PostList />
    </div>
  )
}

export default App;
