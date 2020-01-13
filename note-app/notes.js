const fs = require ('fs');
const chalk = require('chalk');


const getNotes =() => {
    return 'Your notes....';
};
const addNote = (title, body)=> {
    const notes = loadNote();
    const duplicateNote = notes.filter((note) => note.title === title )
        if (duplicateNotes.length === 0){
             notes.push({
        title: title,
        body: body
    });
    saveNotes(notes);
    console.log('New note added')
        } else {
            console.log('Note title taken')

        }
};


const removeNote =(title) => {
    const notes = loadNotes();
    const notesToKeep=  notes.filter((note) => note.title !== title )

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Notes removed'))
    } else {
        console.log(chalk.red.inverse("No note found"))
    }
    saveNotes(notesToKeep);
};

const saveNotes =(notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const listNote = () => {
    const note = loadNotes()

    notes.forEach((note)=>{
        console.log(note.title);
    });
    console.log(chalk.inverse.red('My notes'));
}



const loadNotes = () => {
    try{
         const dataBuffer = fs.readFileSync('notes.json');
         const dataJSON = dataBuffer.toString();
         return JSON.parse(dataJSON);

    } catch (e) {
        return [];
    }
};





module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote:listNote
};
