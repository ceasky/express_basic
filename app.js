const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

app.engine('handlebars',exphbs.engine({defaultLayout:'main'}))
app.set('view engine','handlebars')
app.use(express.static('public'))

app.get('/',(req, res)=>{
  res.render('index')
})

app.get('/:item', (req, res) => {
  res.render(`${req.params.item}`)
})


app.listen(port, ()=>{})