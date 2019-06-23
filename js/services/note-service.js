import {
    utilService
} from '../services/util.service.js'

import {
    storageService
} from '../services/storage.service.js'


export default {
    query,
    deleteNote,
    saveTxt,
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

function saveTxt(note) {
    notesDB.push(note)
    storageService.store(NOTES_KEY, notesDB)
    console.log('notesDB',notesDB)
    console.log('in the service')
    console.log('this.note=',note)

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
            isPint:true,
            txtVal:'i am a text note',
            colorVal:'#"#ffff00"',
            isDone:false,

        }
    },
    {
        type: 'imag',
        info: {
            isPint:false,
            label: 'i am label of txt',
            opts: ['a', 'b', 'c']

        }
    },
    {

        type: 'todos',
        info: {
            isPint:false,
            id: utilService.makeId(),
            label: 'i am label of todos',
            todos: [ {txt:'fiuref',isDone:false}, {txt:'fiuref',isDone:false},{txt:'fiuref',isDone:false}],
            editor: []
        }
    },
    
    
]