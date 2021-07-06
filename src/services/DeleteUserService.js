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
        try{
            await DataBase.sync();
            const findAndDelete = await User.destroy({
                where:{
                    nome: nome
                }
            });

            return {
                findAndDelete,
                message: "user deleted"
            };

        }catch(err){
            console.log(err);
                const erro = new Error("Internal Server Error");
                erro.status = 500;
                erro.expose = true;
                throw erro;
        }
    }
}
module.exports = DeleteUserService;