const ListUserService = require('../services/ListUserService')

class ListUserController{
    async handle(ctx){
        
        const listUserService = new ListUserService();

        if(!ctx.request.body){
            const allUsers = await listUserService.execute();
            return ctx.response.body = {allUsers};
        }

        //OBS: Também da pra buscar pela query do navegador, se for usar o ctx.request.body

        const {nome,} = ctx.request.body;
        
        const user = await listUserService.execute({nome});

        return ctx.response.body = {user}; 

    }
}
module.exports = ListUserController;