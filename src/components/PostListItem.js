import React from 'react'
import { Link } from 'react-router-dom'

export const PostListItem = ({ id, title }) => {
  return (
    <Link to={`/edit/${id}`}>
      <h2>{title}</h2>
    </Link>
  )
}

export default PostListItem