require('dotenv').config();
const Router = require('koa-router');
const router = new Router();

const CreateUserController = require('./controller/CreateUserController');
const ListUserController = require('./controller/ListUserController');
const UpdateUserController = require('./controller/UpdateUserController');
const ListAllUsersController = require('./controller/ListAllUsersController');
const DeleteUserController = require('./controller/DeleteUserController');

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const updateUserController = new UpdateUserController();
const listAllUsersController = new ListAllUsersController();
const deleteUserController = new DeleteUserController();

router.get('/', async (ctx) => {
  ctx.response.body = {
    message: `Seu servidor esta rodando em http://localhost:${process.env.PORT}`
  }
});
router.post('/user', createUserController.handle);
router.get('/user/:nome', listUserController.handle);
router.get('/users', listAllUsersController.handle);
router.patch('/users', updateUserController.handle);
router.delete("/user/:nome", deleteUserController.handle);

module.exports = router;