import express from 'express'

import userRoute from './user-route.js'
import postRoute from './post-route.js'

const router = express.Router()

router.use('/users', userRoute)
router.use('/posts', postRoute)

export default router
