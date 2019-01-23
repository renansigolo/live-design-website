//Configuracao das rotas
function routes($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    templateUrl: 'templates/layout-home.html',
    abstract: true,
    url: '/home'
  })

  $stateProvider.state('home.login', {
    templateUrl: 'templates/login.html',
    controller: 'LoginController',
    url: ''
  })

  $stateProvider.state('home.signup', {
    templateUrl: 'templates/signup.html',
    controller: 'SignupController',
    url: '/signup'
  })

  $stateProvider.state('dashboard', {
    templateUrl: 'templates/layout-dashboard.html',
    abstract: true,
    url: '/dashboard'
  })

  $stateProvider.state('dashboard.orders', {
    templateUrl: 'templates/orders.html',
    controller: 'OrdersController',
    url: '/orders'
  })

  $stateProvider.state('dashboard.payments', {
    templateUrl: 'templates/payments.html',
    controller: 'PaymentsController',
    url: '/payments'
  })

  $stateProvider.state('dashboard.documents', {
    templateUrl: 'templates/documents.html',
    controller: 'DocumentsController',
    url: '/documents'
  })

  $stateProvider.state('dashboard.contacts', {
    templateUrl: 'templates/contacts.html',
    controller: 'ContactsController',
    url: '/contacts'
  })

  $stateProvider.state('dashboard.main', {
    templateUrl: 'templates/main.html',
    controller: 'MainController',
    url: '/main'
  })

  $urlRouterProvider.otherwise('/home')
}
