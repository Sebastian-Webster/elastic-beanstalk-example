const express = require('express')
const path = require('path')

const app = express()

const port = process.env.PORT || 3000

app.get('/people', (req, res) => {
    res.json([
        {
            name: 'Sebastian',
            job: 'Assistant Trainer'
        },
        {
            name: 'David',
            job: 'Assistant Trainer'
        },
        {
            name: 'Gareth',
            job: 'Assistant Trainer'
        },
        {
            name: 'Bharath',
            job: 'Lead Trainer'
        }
    ])
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})