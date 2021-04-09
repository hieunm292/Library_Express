const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

const db=require('./db')
const userRoute=require('./routes/user.route')
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 
app.use(cookieParser())

app.set('view engine','pug')
app.set('views','./views')


app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index',{
      name:'AAA'
  });
});

app.use('/users',userRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})