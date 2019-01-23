function logoutController($scope, $state, $firebaseAuth, $window) {
  const auth = $firebaseAuth()
  $scope.logout = logout

  auth.$onAuthStateChanged(searchStatus)

  function searchStatus(firebaseUser) {
    if (!firebaseUser) {
      return
    }
    $scope.user = firebaseUser
  }

  // Essa função encerra a sessão do usuário no Firebase
  function logout() {
    auth.$signOut()
    $state.go('home.login')
    M.toast({html: 'Logout realizado com sucesso'})
  }
}
