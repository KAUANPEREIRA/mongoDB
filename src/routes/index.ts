import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', HomeController.home);

router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);
router.post('/novoUsuario', UserController.addUserAction);//rota para adicionar usuário com o Mongo
router.get('/usuario/:id/addIdade',UserController.aumentIdade)//esse nome amarelo e a função que esta no controller

router.get('/nome', UserController.nome);
router.get('/idade', UserController.idadeForm);
router.post('/idade-resultado', UserController.idadeAction);

export default router;