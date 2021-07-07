const ListUserService = require('../services/ListUserService')

class ListUserController{
    async handle(ctx){
        
        const listUserService = new ListUserService();
        const nome = ctx.request.params.nome;
        const user = await listUserService.execute(nome);
        return ctx.response.body = {user}; 
    }
}
module.exports = ListUserController;