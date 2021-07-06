const DataBase = require('../database/db');
const User = require('../model/User');


class ListUserService{
    async execute(){

        try{
            await DataBase.sync();
            const userList = await User.findAll();
            return userList;
        }
        catch(err){
            const erro = new Error("Internal Server Error");
            erro.status = 500;
            erro.expose = true;
            throw erro;
        }
    }

}
module.exports = ListUserService;