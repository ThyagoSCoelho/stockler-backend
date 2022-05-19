import Route from '@ioc:Adonis/Core/Route'
import UsersController from 'App/Controllers/Http/UsersController';

Route.group(() => {
  Route.get('/', async () => {
    return { hello: 'world' }
  })

  // Rotas de Users
  Route.resource('/users', 'UsersController').apiOnly();

}).prefix('/api')
