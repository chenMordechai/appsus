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
    <section class="notes-container">
    <input type="text" v-model="txt" placeholder='enter'> 
    <button v-on:click="openTxtNote"> txt </button>
    <button v-on:click="openTodosNote"> todos </button>
    <button v-on:click="openImageNote"> image </button>
    <button v-on:click="saveNute"> save </button>


        <!-- <component :is="type"  v-if="type"  >  </component> -->
        
    </section>
 
    `,
    // props: ['notes'],
    data() {
        return {
            type: '',
            txt: '',
            

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
        },
        saveNute() {
            if (this.type === 'imag') {
                console.log('image')
                var newObject = {
                    type: 'imag',
                    info: {
                        isPint: false,
                        src: this.txt
                    }
                }
            } else if (this.type === 'todos') {
                console.log('todos')
                var newObject = {
                    type: 'todos',
                    info: {
                        isPint: false,
                        id: utilService.makeId(),
                        // todos:[]
                         
                        color: '#ffff00',
                        'bacground-color': '#ffff00'
                    }
                }
            }else if(this.type === 'txt'){
                console.log('txt')

                var newObject = {
                    type: 'txt',
                    info: {
                        isPint: true,
                        id: utilService.makeId(),
                        txt:this.txt,
                        color: '#ffff00',
                        'bacground-color':'#ffff00'
            
                    }
                }
                 
            }//push

        },

        components: {
            txt,
            imag,
            todos
        },
    }