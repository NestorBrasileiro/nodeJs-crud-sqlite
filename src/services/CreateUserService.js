
const DataBase = require('../database/db');
const User = require('../model/User');


class CreateUserService{
    async execute({nome, email, idade}){

        
        if(!nome || !email || !idade){
            const err = new Error("All fields are mandatory");
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
            console.log(err);
        }

        const userAlreadExists = await User.findOne({
            where:{
                email: email
            }
        })
        
        if(userAlreadExists){
            const err = new Error("User already exists");
            err.status = 400;
            err.expose = true;
            throw err;
        }


        const createNewUser = await User.create({
            nome: nome,
            email: email,
            idade: idade
        })
        
        return createNewUser;
        
    }
    

}
module.exports = CreateUserService;
