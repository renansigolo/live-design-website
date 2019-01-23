function passwordController() {
  //Handles the Password Reset button press.
  function sendPasswordReset() {
    const email = document.getElementById('verifyEmail').value
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        // Password Reset Email Sent!
        Materialize.toast('Email de redefinição de senha enviado!', 4000)
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage)
        } else if (errorCode == 'auth/user-not-found') {
          alert(errorMessage)
        }
        console.error(error)
      })
  }
  document
    .getElementById('btnPasswordReset')
    .addEventListener('click', sendPasswordReset, false)
}
