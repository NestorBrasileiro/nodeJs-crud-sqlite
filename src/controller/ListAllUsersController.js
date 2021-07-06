const ListAllUsersService = require('../services/ListAllUsersService')

class ListAllUsersController{
    async handle(ctx){
        
        const listAllUserService = new ListAllUserService();
        
        
        const nome = ctx.request.params.nome;
        console.log(nome);

        const user = await listAllUserService.execute();

        return ctx.response.body = {user}; 

    }
}
module.exports = ListAllUsersController;