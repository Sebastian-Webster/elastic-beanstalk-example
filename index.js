const express = require('express')
const path = require('path')

const app = express()

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

app.listen(80, () => {
    console.log('Listening on port 80')
})