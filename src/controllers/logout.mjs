const logoutHandler = (req, res) => {
  res.clearCookie('token')
  res.redirect('/')
} 

export default logoutHandler