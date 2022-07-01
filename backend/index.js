const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 3300

const { dbconnect } = require('./db/connect.js')
// const Skribbl = require('./models/skribbl.js')

dbconnect()

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
app.use('/api', require('./routes/route.js'))

app.get('/', (req, res) => {
  const data = {
    message : "Hello World!!"
  }
  res.send(data);
})
// const item = new Skribbl({
//   name: 'Sam Singla',
//   phoneNumber: 9876543210,
//   email: 'test@123.com',
//   institute: 'XYZ',
// })


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
