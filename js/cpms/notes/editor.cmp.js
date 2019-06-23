import txt from '../notes/txt-note.cmp.js'
import imag from '../notes/image-note.cmp.js'
import todos from '../notes/todos-note.cmp.js'
import noteService from '../../services/note-service.js'
export default {
    name: 'notes',
    template: `
    <section class="notes-container">
    
    <button v-on:click="openTxtNote"> txt </button>
    <button v-on:click="openTodosNote"> todos </button>
    <button v-on:click="openImageNote"> image </button>


        <component :is="type"  v-if="type"  >  </component>
        
    </section>
 
    `,
    // props: ['notes'],
    data() {
        return {
            type : ''
        }
    },
    mounted() {
        // this.note = noteService.getNoteById
        // console.log(this.note)

        console.log('created list-note', this.notes)
    },
    created() {},
    methods: {
        openTxtNote() {
            this.type = 'txt'
            // console.log(this.type)
        },
        openTodosNote() {
            this.type = 'todos'
            // console.log(this.type)
        },
        openImageNote() {
            this.type = 'imag'
            // console.log(this.type)
        }
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