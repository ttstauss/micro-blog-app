import { firebase, googleAuthProvider } from '../firebase/firebase'

export const login = uid => ({
  type: 'LOGIN',
  uid
})

export const startRegisterUser = (email, password) => {
  return () => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().currentUser.sendEmailVerification()
          .then(() => {
            // console.log('email verification sent')
          }).catch(error => {
            // console.log('unable to send email:', error.message)
          })
      }).catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          firebase.auth().signInWithPopup(googleAuthProvider)
            .then(() => {
              const credential = firebase.auth.EmailAuthProvider.credential(email, password)
              firebase.auth().currentUser.linkAndRetrieveDataWithCredential(credential)
                .then(() => {
                  // console.log('account linking success')
                }).catch(error => {
                  // console.log('account linking error:', error.message)
                })
            })
        }
        throw error
      })
  }
}

export const startEmailLogin = (email, password) => {
  return () => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }
}

export const sendResetLink = email => {
  return () => {
    return firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        // console.log('reset link sent')
      }).catch(error => {
        // console.log('unable to send reset link:', error.message)
      })
  }
}

export const startGoogleLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
  }
}

export const logout = () => ({
  type: 'LOGOUT'
})

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut()
  }
}