//Voce deve rodar os testes usando:  npm test
//Para testar a aplicação, rode: npm run dev

//mais infos
//https://github.com/ZijianHe/koa-router

// todas as configuraçoes devem ser passadas via environment variables

const Koa = require('koa');
const router = require('./routes')

const koa = new Koa();
const PORT = process.env.PORT || 3000;


koa.use(router.routes());

const server = koa.listen(PORT,() => {
  console.log("Server is Running");
});

module.exports = server;