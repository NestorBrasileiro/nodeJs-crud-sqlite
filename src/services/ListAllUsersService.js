const DataBase = require('../database/db');
const User = require('../model/User');


class ListAllUserService{
    async execute(){
        try{
            await DataBase.sync();
            const userList = await User.findAll();
            return userList;

        }catch(err){
            console.log(err);
                const erro = new Error("Internal Server Error");
                erro.status = 500;
                erro.expose = true;
                throw erro;
        }
    }
}
module.exports = ListAllUserService;