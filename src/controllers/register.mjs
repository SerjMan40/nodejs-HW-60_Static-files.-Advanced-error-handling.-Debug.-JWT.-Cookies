import bcrypt from 'bcrypt'
import { addUser, readUsersFromFile } from '../data/usersData.mjs'

export const getRegisterHendler = (req, res) => {
  res.render('register.ejs')
}

export const postRegisterHandler = async (req, res) => {
  const { userName, password } = req.body
  const users = readUsersFromFile()
  const existingUser = users.find((u) => u.userName === userName)
  if (existingUser) {
    return res.status(400).render('isRegister.ejs', {message: 'Username already exists', user: req.user })
  }
  const hashedPassword = await bcrypt.hash(password, 10)
  const newUser = {
    id: users.length + 1,
    userName,
    password: hashedPassword
  }
  addUser(newUser)
  res.status(201).render('isRegister.ejs', {message: 'User registered successfully', user: req.user})
}
