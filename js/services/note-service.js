import {
    utilService
} from '../services/util.service.js'

import {
    storageService
} from '../services/storage.service.js'


export default {
    query,
    deleteNote,
    saveNote
}

const NOTES_KEY = "notes"

function query() {
    var notes = storageService.load(NOTES_KEY)
    if (!notes) {
        notes = notesDB
        storageService.store(NOTES_KEY, notes)

    }
    console.log('notes', notes)
    return Promise.resolve(notes)
}

function deleteNote(id) {
    var idx = notesDB.findIndex(note => note.id === id)
    notesDB.splice(idx, 1)
    console.log(notesDB)
    storageService.store(NOTES_KEY, notesDB)

}

function saveNote(note) {
    console.log('saving not')
    notesDB.unshift(note)
    storageService.store(NOTES_KEY, notesDB)

}
let notesDB = [{
        type: 'txt',
        info: {
            label: 'i am label of txt',
            opts: ['a', 'b', 'c']

        }
    },
    {
        type: 'imag',
        info: {
            label: 'i am label of txt',
            opts: ['a', 'b', 'c']

        }
    },
    {

        type: 'todos',
        info: {
            id: utilService.makeId(),
            label: 'i am label of todos',
            todos: [ {txt:'fiuref',isDone:false}, {txt:'fiuref',isDone:false},{txt:'fiuref',isDone:false}],
            editor: []
        }
    },
    {

        type: 'todos',
        info: {
            id: utilService.makeId(),
            label: 'i am label of todos',
            todos: [ {txt:'fiuref',isDone:false}, {txt:'fiuref',isDone:false},{txt:'fiuref',isDone:false}],
            editor: []
        }
    }
]