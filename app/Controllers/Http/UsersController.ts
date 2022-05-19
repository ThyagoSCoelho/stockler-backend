import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {

    public async store({request, response}: HttpContextContract) {
        const body = request.body()

        return {
            body,
        }
    }

    public async index() {
        return [
            {
                id: 1,
                teste: 'teste'
            },
            {
                id: 2,
                teste: 'teste'
            }
        ]
    }
}
