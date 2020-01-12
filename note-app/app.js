// const fs = require ('fs')

// fs.appendFileSync('notes.txt', ' My name is Emmanuel Olaide')

// fs.writeFileSync('notes.txt', 'This file was created by nodejs')

// const validator = require('validator')
const chalk = require ('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

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
            demandOption:!false,
            type:'string'
        }
    },
    handler:function(argv){
        console.log('Title: ' + argv.title);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a note');
    }
});

// Create read
yargs.command({
    command: 'read',
    describe:'I am currently reading on ALibaba Journey',
    handler: function(){
        console.log('Latest book i read');
    }
})

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
