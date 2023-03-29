const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const ConsumerRouter = require('./routes/ConsumerRouter')
const OrderRouter = require('./routes/OrderRouter')
const AuthRouter = require('./routes/AuthRouter')
const ItemRouter = require('./routes/ProductRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', ConsumerRouter)
app.use('/order', OrderRouter)
app.use('/auth', AuthRouter)
app.use('/item', ItemRouter)

app.get('/', (req, res) => {
  res.send('This is the base path!')
})

app.listen(PORT, () => console.log(`Server Running On Port ${PORT} . . . `))
