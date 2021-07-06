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

        try{
            await DataBase.sync();
            const userList = await User.findOne({
                where:{
                    nome: nome
                }
            });
            if(!userList){
                return {
                    message: "User doesn't exist"
                }
            }
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
module.exports = ListUserService;