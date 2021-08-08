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

   // Get current Posts
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

   return (
      <div className="container mt-4">
         <h1 className="text-danger text-center mb-3">My Posts</h1>
         <Posts loading={loading} posts={currentPosts} />
      </div>
   );
}

export default App;
