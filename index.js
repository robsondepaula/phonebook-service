const express = require('express')
const app = express()

let persons = [{
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"

    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"

    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

// weekday month day year time GMT
const getDate = () => {
    const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const d = new Date();
    const weekName = weekNames[d.getDay()];
    const monthName = monthNames[d.getMonth()]
    const day = d.getDate()
    const year = d.getFullYear()
    const time = d.toTimeString()

    return `${weekName} ${monthName} ${day} ${year} ${time}`
}

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/info', (request, response) => {
    const length = persons ? persons.length : 0
    const returnData = length > 0 ? 'Phonebook has information on ' + persons.length + ' people\n' : ''

    response.send(returnData.concat(getDate()))
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})