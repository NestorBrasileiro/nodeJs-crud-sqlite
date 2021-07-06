require('dotenv').config();
const Router = require('koa-router');
const router = new Router();

const CreateUserController = require('./controller/CreateUserController');
const ListUserController = require('./controller/ListUserController');
const UpdateUserController = require('./controller/UpdateUserController');
const ListAllUsersController = require('./controller/ListAllUsersController');

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const updateUserController = new UpdateUserController();
const listAllUsersController = new ListAllUsersController();



router.get('/', async (ctx) => {
  ctx.response = `Seu servidor esta rodando em http://localhost:${process.env.PORT}`; //http://localhost:3000/
});

router.post('/users', createUserController.handle);
router.get('/user/:nome', listUserController.handle);
router.get('/users', listAllUsersController.handle);
router.patch('/users', updateUserController.handle);

module.exports = router;