const DataBase = require('../database/db');
const User = require('../model/User');


class ListUserService{
    async execute(nome = undefined){
        
        if(!nome){
                const erro = new Error("Not found");
                erro.status = 404;
                erro.expose = true;
                throw erro;
        }
        await DataBase.sync();
        const userList = await User.findOne({
            where:{
                nome: nome
            }
        });
        if(!userList){
            const erro = new Error("User not found");
            erro.status = 404;
            erro.expose = true;
            throw erro;
        }
        return userList;
    }
}
module.exports = ListUserService;