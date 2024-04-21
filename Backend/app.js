const express = require('express')
const app = express()
const cors = require('cors')
const movieRouter = require('./routes/movie')
const authMiddleware = require('./middleware/authMiddleware')
app.use(cors({
  origin: "https://movie-keqy.onrender.com"
}))
app.use(express.json())
//middleware để xác thực người dùng
app.use(authMiddleware)

app.use(movieRouter)
app.use((req, res) =>
{
  res.status(404).json({ message: "Route not found" })
})
app.listen(5000)