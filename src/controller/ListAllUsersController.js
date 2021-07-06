const ListAllUsersService = require('../services/ListAllUsersService')

class ListAllUsersController{
    async handle(ctx){
        
        const listAllUserService = new ListAllUsersService();
        const user = await listAllUserService.execute();
        return ctx.response.body = {user}; 
    }
}
module.exports = ListAllUsersController;