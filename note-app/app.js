// const fs = require ('fs')

// fs.appendFileSync('notes.txt', ' My name is Emmanuel Olaide')

// fs.writeFileSync('notes.txt', 'This file was created by nodejs')

// const validator = require('validator')
const chalk = require ('chalk')
const getNotes = require('./notes.js')

const myBook = getNotes()
console.log(myBook)

// console.log(validator.isURL('https://olaide1191@gmail.com'))

const color = chalk.blue.bold.inverse('This is my excercise')

console.log((color))
console.log (process.argv)
const command = process.argv[2]
if (command === 'add'){
    console.log('adding note')
} else if (command === 'remove'){
    console.log('remove note')
}
