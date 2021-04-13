import express from 'express';
import controller from '../controllers/user';
import extractFirebaseInfo from '../middleware/extractFirebaseInfo';

const router = express.Router();

router.get('/validate', extractFirebaseInfo, controller.validate);
router.get('/:userID', controller.read);
router.post('/create', controller.create);
router.post('/login', controller.login);
router.get('/', controller.readAll);

export = router;