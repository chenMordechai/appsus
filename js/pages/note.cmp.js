import listNote from '../cpms/notes/list-note.cmp.js'
import editor from '../cpms/notes/editor.cmp.js'

import noteService from '../services/note-service.js'
export default {
    name: 'notes',
    template: `
    <section >
    
<editor></editor>

    <listNote :notes="pintNotesToShow" ></listNote>
     ---------------------------------------------------------------------------------------
    <listNote :notes="unPintNotesToShow"></listNote>

    </section>
 
    `,
    data() {
        return {
            notes: []
        }
    },
    computed: {
        pintNotesToShow() {
            console.log('gggggggggggggggggggg', this.notes)
            return this.notes.filter(note => {
                return note.info.isPint
            })
        },
        unPintNotesToShow() {
            console.log('gggggggggggggggggggg', this.notes)
            return this.notes.filter(note => {
                return !(note.info.isPint)
            })
        }
    },
    mounted() {


    },
    created() {
        noteService.query()
            .then(notes => {
                this.notes = notes
                console.log('this.note', this.notes)
            })
    },
    methods: {


    },

    components: {
        listNote,
        editor
    },
}