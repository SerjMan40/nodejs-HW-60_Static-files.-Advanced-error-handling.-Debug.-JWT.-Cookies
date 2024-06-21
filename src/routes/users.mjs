import express from 'express'
import {
  deleteUserOnIdHandler,
  getUserOnIdHandler,
  getUsersHandler,
  putUserOnIdHandler
} from '../controllers/users.mjs'
import authenticateJWT from '../middlewares/authenticate.mjs'

const usersRouter = express.Router()

usersRouter.get('/', authenticateJWT, getUsersHandler)

usersRouter.get('/:userId', authenticateJWT, getUserOnIdHandler)
usersRouter.put('/:userId', authenticateJWT, putUserOnIdHandler)
usersRouter.delete('/:userId', authenticateJWT, deleteUserOnIdHandler)

export default usersRouter
