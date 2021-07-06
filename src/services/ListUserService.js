const DataBase = require('../database/db');
const User = require('../model/User');


class ListUserService{
    async execute({nome = undefined}){
        
        if(!nome){
            try{
                await DataBase.sync();
                const userList = await User.findAll();
                return userList;
            }
            catch(err){
                console.log(err);
                const erro = new Error("Internal Server Error");
                erro.status = 500;
                erro.expose = true;
                throw erro;
            }
        }

        try{
            await DataBase.sync();
            const userList = await User.findAll({
                where:{
                    nome: nome
                }
            });
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