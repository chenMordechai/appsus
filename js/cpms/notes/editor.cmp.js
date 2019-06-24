import txt from '../notes/txt-note.cmp.js'
import imag from '../notes/image-note.cmp.js'
import todos from '../notes/todos-note.cmp.js'
import noteService from '../../services/note-service.js'
import {
    utilService
} from '../../services/util.service.js'



export default {

    name: 'notes',
    template: `
    <section class="editor-container">
    <input type="text" v-model="txt" placeholder='enter' v-on:keyup.enter="saveNute" > </input>
    <button v-on:click="openTxtNote"><i class="far fa-file-alt"></i> </button>
    <button v-on:click="openTodosNote"> <i class="far fa-list-alt"></i></button>
    <button v-on:click="openImageNote"> <i class="far fa-image"></i> </button>
    <!-- <button v-on:click="saveNute"> save </button> -->


        <!-- <component :is="type"  v-if="type"  >  </component> -->
        
    </section>
 
    `,
    // props: ['notes'],
    data() {
        return {
            type: '',
            txt: '',
            todos:[],
            placeholderTXt: 'choose note type'


            // placeholder: 'kjdshf'
        }
    },
    computed: {
        // placeholder(){
        //     return this.placeholder
        // }
    },
    mounted() {
        // this.note = noteService.getNoteById
        // console.log(this.note)

        console.log('created list-note', this.notes)
    },
    created() { },
    methods: {
        openTxtNote() {
            this.type = 'txt'
            this.placeholderTXt= 'Add a text note'
            


            // console.log(this.type)
        },
        openTodosNote() {
            this.type = 'todos'
            this.placeholderTXt= 'Add a todos note'
            // console.log(this.type)
        },
        openImageNote() {
            this.type = 'imag'
            this.placeholderTXt= 'Add an image URL'
            // console.log(this.type)
        },
        saveNute() {
            if (this.type === 'imag') {
                console.log('image')
                var newObject = {
                    type: 'imag',
                    info: {
                        id:utilService.makeId(),
                        isPint: false,
                        src: this.txt
                    }
                }
                console.log('ananax',newObject.info.id)
                noteService.saveNote(newObject)
                this.txt =''

            
            } else if (this.type === 'todos') {
                console.log(' you insert a todos')
                var newTodo = this.txt
                 var newTodos = newTodo.split(',')
                    console.log('newTodo is', newTodo)
                    for (var i = 0; i < newTodos.length; i++){
                        this.todos.push({txt:newTodos[i],isDone:false})
                    
            }

                var newObject = {
                    type: 'todos',
                    info: {
                        isPint: false,
                        id: utilService.makeId(),
                        todos:this.todos,

                        color: '#ffff00',
                        'bacground-color': '#ffff00'
                    }
                }
                console.log(newObject)
                noteService.saveNote(newObject)
                this.txt =''



            

            
            } else if (this.type === 'txt') {
                console.log('txt')

                var newObject = {
                    type: 'txt',
                    info: {
                        isPint: false,
                        id: utilService.makeId(),
                        txt: this.txt,
                        color: '#ffff00',
                        'bacground-color': '#ffff00'

                    }
                }
                console.log(newObject)
                noteService.saveNote(newObject)
                this.txt =''


            }//push
        }
        },


        components: {
            txt,
            imag,
            todos
        },
    }
