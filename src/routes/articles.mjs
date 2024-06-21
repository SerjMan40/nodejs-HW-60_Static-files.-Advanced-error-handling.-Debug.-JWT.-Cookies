import express from 'express'
import {
  getArticlesHandler,
  postArticleHandler,
  putArticleHandler,
  deleteArticleHandler,
  getArticleDetailHandler
} from '../controllers/articles.mjs'
import authenticateJWT from '../middlewares/authenticate.mjs'

const articlesRouter = express.Router()

articlesRouter.get('/', authenticateJWT, getArticlesHandler)
articlesRouter.post('/', authenticateJWT, postArticleHandler)

articlesRouter.get('/:articleId', authenticateJWT, getArticleDetailHandler)
articlesRouter.put('/:articleId', authenticateJWT, putArticleHandler)
articlesRouter.delete('/:articleId', authenticateJWT, deleteArticleHandler)

export default articlesRouter
