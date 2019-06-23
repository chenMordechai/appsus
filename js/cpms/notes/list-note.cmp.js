import txt from '../notes/txt-note.cmp.js'
import imag from '../notes/image-note.cmp.js'
import todos from '../notes/todos-note.cmp.js'
import noteService from '../../services/note-service.js'
export default {
    name: 'notes',
    template: `
    <section class="notes-container">
    
    <div v-for="note in notes">
        <component :is="note.type" v-bind:key="note.id"  :info="note.info" >  </component>
        </div>
    </section>
 
    `,
    props:['notes'],
    data() {
        return {
        }
    },
    mounted() {
        // this.note = noteService.getNoteById
        // console.log(this.note)

        console.log('created list-note',this.notes)
    },
    created() {
    },
    methods: {
        // setVal(val) {
        //     console.log()
        //     console.log('save in the notes')
        //     this.notes.push(val)
        //     console.log('this.notes', this.notes)

        // }
    },

    components: {
        txt,
        imag,
        todos
    },
}