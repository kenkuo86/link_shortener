const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3000
const linkShortener = require('./models/list-shortener')

// 透過 mongoose 把應用程式 server 跟資料庫 server 進行連線
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

// 處理 db 連線失敗時的狀況
db.on('error', () => {
  console.log('mongodb error!')
})

// 處理 db 連線成功時的狀況
db.once('open', () => {
  console.log('mongodb connected!')
})

// 設定 view engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

// 設定 method-override，滿足 RESTful API 的設計原則
app.use(methodOverride('_method'))

// 設定 body-parser
app.use(express.urlencoded({ extended: true }))

// 首頁
app.get('/', (req,res) => {
  res.render('index')
})

app.post('/kk-link-shortener', (req,res) => {
  // 抓取傳過來的原始網址
  const originalLink = req.body.originalLink
  
  // 產生相對應的縮短版網址
  const transferredCode = '6y7UP'

  // 將兩者一起丟入資料庫中
  return linkShortener.create({originalLink, transferredCode})
      .then( () => res.render('result') )
      .catch( (error) => console.log(error) )
  // render result 畫面
  // res.render('result')
})

app.get('/kk-link-shortener/6y7UP', (req,res) => {
  // 根據傳入的 id 抓取資料庫中相對應的原始網址
  const transferredCode = '6y7UP'

  linkShortener.findOne({transferredCode})
    .lean()  
    .then( linkSet => {
      // redirect 到新的網址
      res.redirect(linkSet.originalLink)
    })
    .catch( error => console.log(error))
})

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`)
})