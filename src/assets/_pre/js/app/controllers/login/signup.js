function signupController(
  $scope,
  $state,
  $firebaseAuth,
  $firebaseObject,
  $window
) {
  var auth = $firebaseAuth()
  var ref_usuario = firebase.database().ref('users')

  $scope.data = {}
  $scope.register = register
  $scope.menssageError = {}
  $scope.controlError = false

  function register() {
    auth
      .$createUserWithEmailAndPassword($scope.data.email, $scope.data.password)
      .then(register_data)
      .catch(logError)
  }

  function register_data(firebaseUser) {
    var user = $firebaseObject(ref_usuario.child(firebaseUser.uid))
    var date = new Date()
    user.name = $scope.data.name
    user.email = $scope.data.email
    user.date = date.toString()
    user.$save()

    Materialize.toast('Cadastro realizado com sucesso', 4000)
    $state.go('dashboard.main')
  }

  function logError(error) {
    $scope.controlError = true
    $scope.menssageError = Materialize.toast(error.message, 4000)
  }
}
