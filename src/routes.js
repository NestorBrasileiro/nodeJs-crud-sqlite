require('dotenv').config();
const Router = require('koa-router');
const router = new Router();
const CreateUserController = require('./controller/CreateUserController')
const ListUserController = require('./controller/ListUserController')

const createUserController = new CreateUserController();
const listUserController = new ListUserController();


router.get('/', async (ctx) => {
  ctx.response = `Seu servidor esta rodando em http://localhost:${process.env.PORT}`; //http://localhost:3000/
});

router.post('/users', createUserController.handle);
router.get('/users', listUserController.handle);

module.exports = router;