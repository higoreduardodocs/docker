import express from 'express'

import * as userController from '../controllers/user-controller.js'

const router = express.Router()
const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next)

router.post('/sign-up', use(userController.singUp))
router.post('/sign-in', use(userController.singIn))

export default router
