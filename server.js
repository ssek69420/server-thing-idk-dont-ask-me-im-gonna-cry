const express = require('express')
const project = express()
const port = 8200 // port 3000 listed as already used and connection ended?
// idfk im too tired for this shit
// maybe its because of the SQL database that held
// the same port, but im not sure
// either way, fix it, im gonna sleep 🤘

const message = 'Server is running on port localhost:' // im terribly mentally scarred


project.get('/', (req, res) => {
    res.send('Message thing idk 🗣️🔥')
})

project.get('/items', (req,res) => {
    res.send('why isnt 2b real?')
})

project.listen(port, () => {
    console.log(`${message}${port}`)
})