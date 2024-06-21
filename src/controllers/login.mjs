import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { readUsersFromFile } from "../data/usersData.mjs"

export const getLoginHendler = (req, res) => {
  res.render('login.ejs')
}


export const postLoginHandler = async (req, res) => {
  const { userName, password } = req.body
  const users = readUsersFromFile()
  const user = users.find((u) => u.userName === userName)
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ userName }, 'your_jwt_secret', { expiresIn: '1h' })
    res.cookie('token', token, { httpOnly: true }).render('isLogin.ejs', {login: true})
    
  } else {   
    res.status(401).render('isLogin.ejs', {login: false})
  }
}