import {
  addPost,
  startAddPost,
  editPost,
  startEditPost,
  deletePost,
  startDeletePost,
  fetchPosts,
  startFetchPosts
} from '../../actions/posts'
import posts from '../fixtures/posts'
import database from '../../firebase/firebase'

const uid = 'abc123'

beforeEach(done => {
  const postsData = {}
  posts.forEach(({ id, title, body, createdAt }) => {
    postsData[id] = { title, body, createdAt }
  })
  database.ref(`users/${uid}/posts`).set(postsData).then(() => done())
})

describe('POSTS ACTIONS', () => {
  describe('ADD POST', () => {
    test('should set up add post action object', () => {
      const action = addPost(posts[0])
      expect(action).toEqual({
        type: 'ADD_POST',
        post: posts[0]
      })
    })
  })

  describe('EDIT POST', () => {
    const { id } = posts[0]
    const updates = {
      title: 'Title Update',
      Body: 'Body update.',
      createdAt: 123
    }
    test('should set up edit post action object', () => {
      const action = editPost(id, updates)
      expect(action).toEqual({
        type: 'EDIT_POST',
        id,
        updates: {
          ...updates
        }
      })
    })
  })

  describe('DELETE POST', () => {
    const { id } = posts[0]
    test('should set up delete post action object', () => {
      const action = deletePost(id)
      expect(action).toEqual({
        type: 'DELETE_POST',
        id
      })
    })
  })

  describe('FETCH POSTS', () => {
    test('should set up fetch posts action object', () => {
      const action = fetchPosts(posts)
      expect(action).toEqual({
        type: 'FETCH_POSTS',
        posts
      })
    })
  })
})