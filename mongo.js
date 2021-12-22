const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
const processName = process.argv[3]
const processNumber = process.argv[4]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.6xze4.mongodb.net/phonebook-app?retryWrites=true&w=majority`
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  id: Number,
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  id: Math.floor(Math.random() * 1000),
  name: processName,
  number: processNumber,
})

if(process.argv.length === 5){
  person.save().then(result => {
    console.log(`added ${result.name} ${result.number} to phonebook`)
    mongoose.connection.close()
  })
}

if(process.argv.length === 3){
  Person.find({}).then(result => {
    console.log('phonebook:')
    result.forEach(person => {
      console.log(person.name + ' ' + person.number)
    })
    mongoose.connection.close()
  })
}