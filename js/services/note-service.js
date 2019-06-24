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
    console.log('notesDB', notesDB)
    console.log('in the service')
    console.log('this.note=', note)

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
            isPint: true,
            id: utilService.makeId(),

            txt: 'i am a text note',
            color: '#ffff00',
            'bacground-color':'#ffff00'

        }
    },
    {
        type: 'imag',
        info: {
            isPint: false,
            id: utilService.makeId(),

            src:'https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg',
            color: '#ffff00',
            'bacground-color':'#ffff00'
        }

    },
    {

        type: 'todos',
        info: {
            isPint: false,
            id: utilService.makeId(),
            todos: [{
                txt: 'fiuref',
                isDone: false
            }, {
                txt: 'fiuref',
                isDone: false
            }, {
                txt: 'fiuref',
                isDone: false
            }],
            color: '#ffff00',
            'bacground-color':'#ffff00'
        }
    },
    {
        type: 'imag',
        info: {
            isPint: false,
            id: utilService.makeId(),

            src:'https://www.ynet.co.il/PicServer5/2018/08/28/8740729/874072601001384640360no.jpg',
            color: '#ffff00',
            'bacground-color':'#ffff00'
        }
    },
    {
        type: 'imag',
        info: {
            isPint: false,
            id: utilService.makeId(),

            src:'http://cafe.themarker.com/media/t/108/102/0/file_0_big.jpg',
            color: '#ffff00',
            'bacground-color':'#ffff00'
        }
    },
    {

        type: 'todos',
        info: {
            isPint: false,
            id: utilService.makeId(),
            todos: [{
                txt: 'frrfdsf',
                isDone: false
            }, {
                txt: 'fefr',
                isDone: false
            }],
            color: '#ffff00',
            'bacground-color':'#ffff00'
        }
    },

]