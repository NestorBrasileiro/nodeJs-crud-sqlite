const DeleteUserService = require('../services/DeleteUserService')

class DeleteUserController{
    async handle(ctx){
        
        const deleteUserService = new DeleteUserService();
    
        const nome = ctx.request.params.nome;

        const user = await listUserService.execute(nome);

        return ctx.response.body = {user}; 

    }
}
module.exports = DeleteUserController;