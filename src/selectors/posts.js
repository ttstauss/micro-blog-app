export default (posts, { text, sortBy }) => {
  return posts.filter(post => {
    const textMatch = post.title.toLowerCase().includes(text.toLowerCase())
    return textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    }
    if (sortBy === 'title') {
      return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
    }
  })
}