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
    saveNote,
    pintNote
}
let notesDB = []
const NOTES_KEY = "notes"

function query() {
    var notes = storageService.load(NOTES_KEY)
    if (!notes) {
        notes = notesInit
        storageService.store(NOTES_KEY, notes)
    }
    console.log('notes', notes)
    notesDB = notes
    return Promise.resolve(notesDB)
}

function saveTxt(note) {
    notesDB.push(note)
    storageService.store(NOTES_KEY, notesDB)
    console.log('notesDB', notesDB)
    console.log('in the service')
    console.log('this.note=', note)

}

function deleteNote(id) {
    console.log(notesDB)

    console.log(id)
    // notesDB = storageService.load(NOTES_KEY)
    var idx = notesDB.findIndex(note => {
        console.log('notes id in service', note.info.id)
        return note.info.id == id
    })

    console.log(idx)
    notesDB.splice(idx, 1)
    console.log(notesDB)
    storageService.store(NOTES_KEY, notesDB)

}

function pintNote(id) {
    // notesDB = storageService.load(NOTES_KEY)
    console.log(id)
    var note = notesDB.find(note => note.info.id === id)
    // note.isPint=!note.isPint
    console.log(note.info.isPint)
    note.info.isPint = !note.info.isPint
    storageService.store(NOTES_KEY, notesDB)


}

function saveNote(note) {
    console.log(notesDB.length)
    // notesDB = storageService.load(NOTES_KEY)

    console.log('saving not', note)
    notesDB.unshift(note)
    storageService.store(NOTES_KEY, notesDB)
    console.log(notesDB.length)
}

let notesInit = [{
        type: 'txt',
        info: {
            isPint: true,
            id: 'fdffd',
            txt: 'i am a text note',
            color: '#ffff00',
            'bacground-color': '#ffff00'

        }
    },
    {
        type: 'imag',
        info: {
            isPint: false,
            id: 'fdsws',
            src: 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg',
            color: '#ffff00',
            'bacground-color': '#ffff00'
        }

    },
    {

        type: 'todos',
        info: {
            isPint: false,
            id: 'dddss',
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
            'bacground-color': '#ffff00'
        }
    },
    {
        type: 'imag',
        info: {
            isPint: false,
            id: 'fhfdj',

            src: 'https://www.ynet.co.il/PicServer5/2018/08/28/8740729/874072601001384640360no.jpg',
            color: '#ffff00',
            'bacground-color': '#ffff00'
        }
    },
    {
        type: 'imag',
        info: {
            isPint: false,
            id: 'udfjm',

            src: 'http://cafe.themarker.com/media/t/108/102/0/file_0_big.jpg',
            color: '#ffff00',
            'bacground-color': '#ffff00'
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
            'bacground-color': '#ffff00'
        }
    },

]