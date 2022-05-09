const util = require('util');
const fs = require('fs');

// create read file and write file for pathways
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    // read method
    read() {
        return readFileAsync('db/db.json', 'utf-8');
    };

    // write method
    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    };

    // get notes method
    getNotes() {
        return this.read().then((notes) => {
            return JSON.parse(notes);
        });
    };

    // add note method
    addNote(note) {
        // destructure and set note title and text to variable
        const { title, text } = note;

        // check if note is missing title or text
        if (!title || !text) {
            throw new Error("Note 'title' and 'text' must be filled in!");
        }

        const newNote = { title, text};

        // get notes, add new note, write all notes again, return new note
        return this.getNotes()
            .then((notes) => [...notes, newNote])
            .then((updatedNotes) => this.write(updatedNotes))
            .then(() => newNote);
    };

}

module.exports = new Store();