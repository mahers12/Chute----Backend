const express = require('express')
const cors = require('cors')
const logger = require('morgan')
// const AppRouter = require('./routes/AppRouter')
// const ReviewRouter = require('./routes/ReviewRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use('/api', AppRouter)
// app.use('/reviews', ReviewRouter)
// app.use('/auth', AuthRouter)
// app.use('/album', AlbumRouter)

app.get('/', (req, res) => {
  res.send('This is the base path!')
})

app.listen(PORT, () => console.log(`Server Running On Port ${PORT} . . . `))
