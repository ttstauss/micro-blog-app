import React from 'react'
import PostListFilters from './PostListFilters'
import AddPostButton from './AddPostButton'
import BlogList from './PostList'

export const DashboardPage = () => (
  <div>
    <div>
      <PostListFilters />
      <AddPostButton />
    </div>
    <BlogList />
  </div>
)

export default DashboardPage