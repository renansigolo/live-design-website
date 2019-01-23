function paymentsController($scope, $state, $firebaseObject, $firebaseAuth) {
  //Initialize collapse list
  $(document).ready(() => {
    $('.collapsible').collapsible()
  })

  $scope.authObj = $firebaseAuth()

  var authData = $scope.authObj.$getAuth()

  //First value of the database
  const rootRef = firebase
    .database()
    .ref()
    .child('users')
  //Second value of the database referencing to the first
  const ref = rootRef.child(authData.uid)
  const anotherref = ref.child('projectName')
  //Gets the last variable as the parameter into a variable to be accessed in firebase
  const syncObject = $firebaseObject(anotherref)
  //Create a variable in the 'dados' that syncs with firebase and with the $scope
  syncObject.$bindTo($scope, 'paymentsData')
}
