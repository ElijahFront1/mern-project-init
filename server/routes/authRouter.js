import Router from 'express'
const router = new Router()
import { check } from 'express-validator'
import authController from '../controllers/authController.js'
import authMiddleware from '../middleware/authMiddleware.js'
import roleMiddleware from '../middleware/roleMiddleware.js'

router.post('/registration', [
    check('username', 'Username cannot be empty').notEmpty(),
    check('password', 'Password cannot be shorter than eight characters').isLength({ min: 8 }),
], authController.registration)
router.post('/login', authController.login)
router.get('/auth', authMiddleware, authController.auth)
router.get('/users', roleMiddleware(['ADMIN']), authController.getUsers)

export default router;