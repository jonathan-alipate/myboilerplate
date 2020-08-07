const express = require('express')
const server = express()
const port = 3000

server.listen(port, () => {
    console.log('Server started: listening on port ' + port)
})

server.use(express.static('src/public'))