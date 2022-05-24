import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product';

export default class ProductController {

    public async store({request}: HttpContextContract) {
        const user = request.only(['name','valor','unidade','quantidade'])
        return await Product.create(user);
    }

    public async index() {
        return await Product.all();
    }

    public async show({ params }: HttpContextContract) {
        return await Product.find(params.id);
    }

    public async update({ params, request }: HttpContextContract) {
        const course = await Product.findOrFail(params.id);

        const dataToUpdate = request.only(['name','valor','unidade','quantidade']);
    
        course.merge(dataToUpdate);
    
        await course.save();
    
        return course;
    }

    public async delete(id: number) {}

}
