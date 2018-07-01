import selectPosts from '../../selectors/posts'
import posts from '../fixtures/posts'

describe('POSTS SELECTORS', () => {
  test('should sort by date', () => {
    const filters = {
      text: '',
      sortBy: 'date'
    }
    const result = selectPosts(posts, filters)
    expect(result).toEqual([
      posts[2],
      posts[0],
      posts[1]
    ])
  })

  test('should sort by title', () => {
    const filters = {
      text: '',
      sortBy: 'title'
    }
    const result = selectPosts(posts, filters)
    expect(result).toEqual([
      posts[1],
      posts[2],
      posts[0]
    ])
  })

  test('should filter by text value', () => {
    const filters = {
      text: 'life',
      sortBy: 'date'
    }
    const result = selectPosts(posts, filters)
    expect(result).toEqual([
      posts[2]
    ])
  })
})