// const fs = require ('fs')

// fs.appendFileSync('notes.txt', ' My name is Emmanuel Olaide')

// fs.writeFileSync('notes.txt', 'This file was created by nodejs')

// const validator = require('validator')
const chalk = require ('chalk');
const yargs = require('yargs');
const note = require('./notes.js');

// console.log(process.argv)
yargs.version('1.1.0');
console.log(yargs.argv);

// Create Add Command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption:true,
            type:'string'
        },
        body: {
            describe: 'Body title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        note.addNote(argv.title, argv.body)
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler(){
        console.log('Removing a note');
    }
});

// Listing note command

yargs.command({
    command: 'list',
    describe: 'Listing a note',
    handler(){
        note.listNote( )
    }
})



// Create read
yargs.command({
    command: 'read',
    describe:'I am currently reading on ALibaba Journey',
    builder:{
        title: {
           describe: 'Note Title',
           demandOption: "true",
           type: "string"
        }

    },
    handler(argv){
         notes.removeNote(title)
    }
// const myBook = getNotes()
// console.log(myBook)

// console.log(validator.isURL('https://olaide1191@gmail.com'))

// const color = chalk.blue.bold.inverse('This is my excercise')

// console.log((color))
// console.log (process.argv)
// const command = process.argv[2]
// if (command === 'add'){
//     console.log('adding note')
// } else if (command === 'remove'){
//     console.log('remove note')
// }
})
