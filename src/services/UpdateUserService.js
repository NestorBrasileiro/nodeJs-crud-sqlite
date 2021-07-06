const DataBase = require('../database/db');
const User = require('../model/User');


class UpdateUserService{
    async execute({nome, email, idade}){

        if(!email){
            const err = new Error("The email is mandatory to update");
            err.status = 400;
            err.expose = true;
            throw err;
        }
        if(idade < 18){
            const err = new Error("Can't save users under 18 years old");
            err.status = 400;
            err.expose = true;
            throw err;
        }
        
        try{
            await DataBase.sync();
        }
        catch(err){
            console.log(err)
            const erro = new Error("internal server Error");
            erro.status = 500;
            erro.expose = true;
            throw erro;
        }
        
        const user = await User.findOne({
            where:{
                email: email
            }
        })
        
        if(!user){
            const erro = new Error("User doesn't exist");
            erro.status = 401;
            erro.expose = true;
            throw erro
        }
        user.nome = nome;
        user.idade = idade;

        const saveUser = await user.save();

        return saveUser;
        
    }
    

}
module.exports = UpdateUserService;
