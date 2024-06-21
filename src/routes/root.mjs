import express from 'express'
import { getRootHendler } from '../controllers/root.mjs'
import authenticateJWT from '../middlewares/authenticate.mjs'

const rootRouter = express.Router()

rootRouter.get('/', getRootHendler)

export default rootRouter
