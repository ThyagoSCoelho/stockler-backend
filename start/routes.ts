import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', async () => {
    return { hello: 'world' }
  })

  // Rotas de Users
  Route.resource('/users', 'UsersController').apiOnly();
  Route.resource('/product', 'ProductController').apiOnly();

}).prefix('/api')
