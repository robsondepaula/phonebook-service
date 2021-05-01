const express = require('express')
const morgan = require('morgan')

const app = express()

morgan.token('phonebook', function (req, res) {
    return (req.method === 'POST') ? JSON.stringify(req.body) : ''
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :phonebook'))
app.use(express.json())

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

const getDate = () => {
    const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]

    const d = new Date()
    const weekName = weekNames[d.getDay()]
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

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    person = persons.filter(person => person.id !== id)

    response.status(204).end()
})

const generateId = () => {
    const maxId = persons.length > 0 ?
        Math.max(...persons.map(p => p.id)) :
        0
    return maxId + 1
}

app.post('/api/persons', (request, response) => {
    const body = request.body

    if ((!body.name) || (!body.number)) {
        return response.status(400).json({
            error: 'invalid input'
        })
    }

    let person = persons.find(person => person.name === body.name)
    if (person) {
        return response.status(409).json({
            error: 'name must be unique'
        })
    }

    person = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(person)

    response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})