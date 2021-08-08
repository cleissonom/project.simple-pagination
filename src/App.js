import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Posts } from './components/Posts'

function App() {
   const [posts, setPosts] = useState([])
   const [loading, setLoading] = useState(false)
   const [currentPage, setCurrentPage] = useState(1)
   const [postsPerPage, setPostsPerPage] = useState(10)

   useEffect(() => {
      const fetchPosts = async () => {
         setLoading(true);
         const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
         setPosts(res.data);
         setLoading(false);
      }

      fetchPosts();
   }, [])

   return (
      <div className="container mt-5">
         <h1 className="text-danger mb-3">My BLog</h1>
         <Posts loading={loading} posts={posts} />
      </div>
   );
}

export default App;
