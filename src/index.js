//Voce deve rodar os testes usando:  npm test
//Para testar a aplicação, rode: npm run dev

//mais infos
//https://github.com/ZijianHe/koa-router

// todas as configuraçoes devem ser passadas via environment variables
require('dotenv').config();

const Koa = require('koa');
const router = require('./routes');
const json = require('koa-json');
const bodyParser = require('koa-bodyparser');
const error = require('koa-json-error');


const koa = new Koa();
const PORT = process.env.PORT || 3000;


function formatError(err){
  if(err instanceof Error){
    return {
      erro: err.message
    }

  }
  else{
    return {
      message: 'internal server error'
    }
  }
  
}



koa.use(json());
koa.use(bodyParser());
koa.use(error(formatError))
koa.use(router.routes()).use(router.allowedMethods());

const server = koa.listen(PORT,() => {
  console.log("Server is Running");
});

module.exports = server;