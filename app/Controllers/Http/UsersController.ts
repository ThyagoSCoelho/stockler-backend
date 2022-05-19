import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {

    public async store({request}: HttpContextContract) {
        const user = request.only(['name','email','password','cnpj'])
        
        return await User.create(user);

    }

    public async index() {
        return await User.all();
    }

    public async show({ params }: HttpContextContract) {
        return await User.find(params.id);
    }

    public async update({ params, request }: HttpContextContract) {
        const course = await User.findOrFail(params.id);

        const dataToUpdate = request.only(['name', 'description', 'url', 'price']);
    
        course.merge(dataToUpdate);
    
        await course.save();
    
        return course;
    }

    public async delete(id: number) {}

}
