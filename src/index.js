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
const swagger = require('swagger2')
const {ui} = require("swagger2-koa")


const swaggerDocument = swagger.loadDocumentSync("src/api.yaml");
const koa = new Koa();
const PORT = process.env.PORT || 3000;

function formatError(err){
  if(err.status != 400 && err.status != 404){
    return {
      error: 'internal server error'
    }
  }
  return {
    error: err.message 
  }
}

koa
  .use(ui(swaggerDocument, "/swagger"))
  .use(json())
  .use(bodyParser())
  .use(error(formatError))
  .use(router.routes()).use(router.allowedMethods());

const server = koa.listen(PORT,() => {
  console.log("Server is Running");
});

module.exports = server;