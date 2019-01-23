function loginController($scope, $state, $window) {
  //Get Elements
  const txtEmail = document.getElementById('email')
  const txtPassword = document.getElementById('password')
  const btnLogin = document.getElementById('btnSignIn')

  //If click the button
  btnLogin.addEventListener('click', e => {
    const email = txtEmail.value
    const pass = txtPassword.value
    const auth = firebase.auth()

    //Sign In
    const promise = auth.signInWithEmailAndPassword(email, pass)

    //Catch error saved in promise const and display to the user
    promise.catch(e => M.toast({html: e.message}))
  })

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      successfulLogin()
    } else {
      console.info('Not logged in')
    }
  })

  const successfulLogin = () => {
    M.toast({html: 'Bem-vindo!'})
    $state.go('dashboard.main')
  }
}
