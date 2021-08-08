import React from 'react'

export const Posts = ({ posts, loading }) => {
   if (loading) {
      return <h2 className="text-center mt-5">Loading...</h2>
   }

   return (
      <ul className="list-group list-group-flush mb-4">
         {posts.map(post => (
            <li key={post.id} className="list-group-item d-flex justify-content-between align-items-center">
               {post.title}
               <span class="badge bg-danger rounded-pill">{post.id}</span>
            </li>
         ))}
      </ul>
   )
}