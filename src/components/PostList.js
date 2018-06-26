import React from 'react'
import { connect } from 'react-redux'
import PostListItem from './PostListItem'
import selectPosts from '../selectors/posts'

export const BlogList = props => {
  return (
    <div>
      {
        props.posts.length === 0 ? (
          <div>
            <span>No posts</span>
          </div>
        ) : (
          props.posts.map(post => (
            <PostListItem key={post.title} {...post} />
          ))
        )
      }
    </div>
  )
}

const mapStateToProps = state => ({
  posts: selectPosts(state.posts, state.filters)
})

export default connect(mapStateToProps)(BlogList)