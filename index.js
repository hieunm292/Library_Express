require('dotenv').config()

const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

const userRoute=require('./routes/user.route')
const authMiddleware=require('./middlewares/auth.middleware')
const productRoute=require('./routes/product.route')
const auth=require('./routes/auth.route')
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 
app.use(cookieParser(process.env.SESSION_SECRET))

app.set('view engine','pug')
app.set('views','./views')


// app.use(express.static('public'))

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.render('index')
});

app.use('/users',authMiddleware.requireAuth , userRoute)
app.use('/auth',auth)
app.use('/products', productRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})