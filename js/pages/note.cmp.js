import txt from '../cpms/notes/txt-note.cmp.js' 
import imag from '../cpms/notes/image-note.cmp.js' 
import todos from '../cpms/notes/todos-note.cmp.js' 
import noteService from '../services/note-service.js'
export default {
    name: 'notes',
    template: `
    <section class="notes-container">
    
    <div v-for="note in notes">
        <component :is="note.type" v-bind:key="note.id"  :info="note.info" @setVal="setVal" >  </component>
        </div>
    </section>
 
    `,
    data() {
        return{   
            notes:null
        }
    },
    mounted(){
        // this.note = noteService.getNoteById
        // console.log(this.note)
        
    },
    created(){
        noteService.query()
        .then(notes=>{
            this.notes = notes
            console.log('this.note',this.notes)
        })
    },
    methods:{
        setVal(val){
console.log(val)
        }
    },

components:{
    txt,
    imag,
    todos
},
}