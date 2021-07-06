const ListUserService = require('../services/ListUserService')

class ListUserController{
    async handle(ctx){

        const listUserService = new ListUserService();
        
        const user = await listUserService.execute()

        return ctx.response.body = {user}; 

    }
}
module.exports = ListUserController;