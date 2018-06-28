import database from '../firebase/firebase'

// ADD POST
export const addPost = post => ({
  type: 'ADD_POST',
  post
})

export const startAddPost = (postData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const {
      title = '',
      body = '',
      createdAt = 0
    } = postData
    const post = { title, body, createdAt }
    const postRef = database.ref('posts/')
    const newPostKey = postRef.push().key
    let newPost = {}
    newPost[`posts/${newPostKey}`] = {
      ...post
    }
    newPost[`users/${uid}/posts/${newPostKey}`] = {
      ...post
    }
    return database.ref().update(newPost).then(() => {
      dispatch(addPost({
        id: newPostKey,
        ...post
      }))
    })
  }
}

// EDIT POST
export const editPost = (id, updates) => ({
  type: 'EDIT_POST',
  id,
  updates
})

export const startEditPost = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const updatePost = {}
    for(let prop in updates) {
      updatePost[`posts/${id}/${prop}`] = updates[prop]
      updatePost[`users/${uid}/posts/${id}/${prop}`] = updates[prop]
    }
    return database.ref().update(updatePost).then(() => {
      dispatch(editPost(id, updates))
    })
  }
}

// DELETE POST
export const deletePost = (id = '') => ({
  type: 'DELETE_POST',
  id
})

export const startDeletePost = (id = '') => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/posts/${id}`).remove().then(() => {
      dispatch(deletePost(id))
    })
  }
}

// FETCH POSTS
export const fetchPosts = posts => ({
  type: 'FETCH_POSTS',
  posts: posts
})

export const startFetchPosts = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/posts`)
      .once('value')
      .then(snapshot => {
        const posts = []
        snapshot.forEach(childSnapshot => {
          posts.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        })
        dispatch(fetchPosts(posts))
      })
    }
}