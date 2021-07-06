const UpdateUserService = require('../services/UpdateUserService')

class UpdateUserController{
    async handle(ctx){
        
        const updateUserService = new UpdateUserService();

        const {nome, email, idade} = ctx.request.body;
        
        const user = await updateUserService.execute({nome, email, idade});

        return ctx.response.body = {user};
    }
}
module.exports = UpdateUserController;