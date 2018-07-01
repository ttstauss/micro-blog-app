import postsReducer from '../../reducers/posts'
import posts from '../fixtures/posts'

describe('POSTS REDUCER', () => {
  describe('DEFAULT', () => {
    test('should set default state', () => {
      const action = { type: '@@INIT' }
      const state = postsReducer(undefined, action)
      expect(state).toEqual([])
    })
  })

  describe('ADD POST', () => {
    test('should add a post', () => {
      const post = {
        title: 'Test Title',
        body: 'Test body.',
        createdAt: 0
      }
      const action = {
        type: 'ADD_POST',
        post
      }
      const state = postsReducer(posts, action)
      expect(state).toEqual([...posts, post])
    })
  })

  describe('EDIT POST', () => {
    test('should edit a post', () => {
      const updates = {
        title: 'New Title',
        body: 'New Body',
        createdAt: 1000
      }
      const action = {
        type: 'EDIT_POST',
        id: posts[0].id,
        updates
      }
      const state = postsReducer(posts, action)
      expect(state[0]).toEqual({
        ...state[0],
        ...updates
      })
    })

    test('should not edit post if post not found', () => {
      const updates = {
        title: 'New Title',
        body: 'New Body',
        createdAt: 1000
      }
      const action = {
        type: 'EDIT_POST',
        id: 'abc123',
        updates
      }
      const state = postsReducer(posts, action)
      expect(state).toEqual(posts)
    })
  })

  describe('DELETE POST', () => {
    test('should delete post', () => {
      const action = {
        type: 'DELETE_POST',
        id: posts[1].id
      }
      const state = postsReducer(posts, action)
      expect(state).toEqual([posts[0], posts[2]])
    })

    test('should not delete post if post not found', () => {
      const action = {
        type: 'DELETE_POST',
        id: 'abc123'
      }
      const state = postsReducer(posts, action)
      expect(state).toEqual(posts)
    })
  })

  describe('FETCH POSTS', () => {
    test('should fetch posts', () => {
      const action = {
        type: 'FETCH_POSTS',
        posts: [{
          id: 'abc123',
          title: 'Test Title',
          body: 'Test body.',
          createdAt: 0
        }]
      }
      const state = postsReducer(posts, action)
      expect(state).toEqual([{
        id: 'abc123',
        title: 'Test Title',
        body: 'Test body.',
        createdAt: 0
      }])
    })
  })
})