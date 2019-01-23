function mainController($scope, $state, $firebaseObject, $firebaseAuth) {
  $scope.authObj = $firebaseAuth()

  var authData = $scope.authObj.$getAuth()
  var userUID = authData.uid

  if (authData) {
    //console.log("Logged in as:", authData.uid);

    //First value of the database
    const rootRef = firebase
      .database()
      .ref()
      .child('users')
    //Second value of the database referencing to the first
    const ref = rootRef.child(authData.uid)
    //Gets the last variable as the parameter into a variable to be accessed in firebase
    const syncObject = $firebaseObject(ref)
    //Create a variable in the 'dados' that syncs with firebase and with the $scope
    syncObject.$bindTo($scope, 'data')
  } else {
    console.log('Logged out')
  }
}
