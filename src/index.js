//Voce deve rodar os testes usando:  npm test
//Para testar a aplicação, rode: npm run dev

//mais infos
//https://github.com/ZijianHe/koa-router

// todas as configuraçoes devem ser passadas via environment variables

const Koa = require('koa');

const PORT = process.env.PORT || 3000;

const koa = new Koa();


// //rota simples pra testar se o servidor está online
// router.get('/', async (ctx) => {
//   ctx.body = `Seu servidor esta rodando em http://localhost:${PORT}`; //http://localhost:3000/
// });

// //Uma rota de exemplo simples aqui.
// //As rotas devem ficar em arquivos separados, /src/controllers/userController.js por exemplo
// router.get('/users', async (ctx) => {
//     ctx.status = 200;
//     ctx.body = {total:0, count: 0, rows:[]}
// });

const server = koa.listen(PORT,() => {
  console.log("Server is Running");
});

module.exports = server;