const CreateUserService = require('../services/CreateUserService')

class CreateUserController{
    async handle(ctx){

        const {nome,email, idade} = ctx.request.body
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({
            nome,
            email,
            idade
        })
            ctx.response.status = 201;
        return ctx.response.body = {user};
    }
}
module.exports = CreateUserController;


