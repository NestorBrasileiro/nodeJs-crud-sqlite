const DataBase = require('../database/db');
const User = require('../model/User');


class DeleteUserService{
    async execute(nome = undefined){
        
        if(!nome){
                const erro = new Error("Not found");
                erro.status = 404;
                erro.expose = true;
                throw erro;
        }
        await DataBase.sync();
        const user = await User.findOne({
            where:{
                nome: nome
            }
        });
        
        if(!user){
            const erro = new Error("User not found");
            erro.status = 404;
            erro.expose = true;
            throw erro;
        }
        await user.destroy()
        return user;
    }
}
module.exports = DeleteUserService;