import express from 'express'

import * as postController from '../controllers/post-controller.js'

const router = express.Router()
const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next)

router
  .route('/')
  .get(use(postController.findAll))
  .post(use(postController.save))

router.get('/seed', postController.seed)

router
  .route('/:id')
  .get(use(postController.findById))
  .put(use(postController.update))
  .delete(use(postController.remove))

export default router
