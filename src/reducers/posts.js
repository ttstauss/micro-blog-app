const postsReducerDefaultState = []

export default (state = postsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        action.post
      ]
    case 'EDIT_POST':
      return state.map(post => {
        if (post.id === action.id) {
          return {
            ...post,
            ...action.updates
          }
        } else {
          return post
        }
      })
    case 'DELETE_POST':
      return state.filter(({ id }) => id !== action.id)
    case 'FETCH_POSTS':
      return action.posts
    case 'FETCH_POST':
      return action.post
    default:
      return state
  }
}