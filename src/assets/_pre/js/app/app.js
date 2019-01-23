//Inicia o modulo do Dashboard em Angular
var app = angular.module('app', ['firebase', 'ui.router'])

//Declara os modulos dos controllers do Dashboard
app.controller('MainController', mainController)
app.controller('OrdersController', ordersController)
app.controller('PaymentsController', paymentsController)
app.controller('DocumentsController', documentsController)
app.controller('ContactsController', contactsController)

//Declara os modulos dos controllers do Login
app.controller('LoginController', loginController)
app.controller('LogoutController', logoutController)
app.controller('SignupController', signupController)
app.controller('PasswordController', passwordController)

//Declara as configuracoes das Rotas
app.config(routes)
