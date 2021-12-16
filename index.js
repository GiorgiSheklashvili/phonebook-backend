const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(express.static('build'))
app.use(cors())
morgan.token('body', (req, res) => JSON.stringify(req.body))


app.use(express.json())
app.use(morgan(':method :url :status :body'))

let phonebookEntries = [
    {
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

app.get('/api/persons', (request, response) => {
    response.json(phonebookEntries)
})

app.get('/info', (request, response) => {
    response.send(`<span>Phonebook has info for ${phonebookEntries.length} people</span><br><span>${new Date()}</span>`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = phonebookEntries.find(entry => entry.id === id)
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    phonebookEntries = phonebookEntries.filter(entry => entry.id !== id)

    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body
    console.log(body)
    if(phonebookEntries.filter(e => e.name === body.name).length > 0){
        return response.status(403).json({
            error: 'name must be unique'
        })
    }
    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'name or number missing'
        })
    }

    const person = {
        id: Math.floor(Math.random() * 1000),
        name: body.name,
        number: body.number,
    }

    phonebookEntries = phonebookEntries.concat(person)

    response.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)