export const getRootHendler = (req, res) => {
  res.render('root.ejs', { user: req.user })
}
