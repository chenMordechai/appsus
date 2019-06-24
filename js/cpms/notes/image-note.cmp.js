import
noteService
from '../../services/note-service.js'
import {
    utilService
} from '../../services/util.service.js'

export default {
    name: 'imgNotes',

    template: `
    <section   class ="img-container" >
       <label>
       <h1>Image</h1>
       <button v-on:click="deleteNote"><i class="fas fa-trash"></i></button>
       <button v-on:click="saveNote"><i class="fas fa-plus"></i></button>
       <br>
       url:
       <input type='text' v-model="url" @change="reportVal">
       <button v-on:click="saveImg"> save</button>
       <img class="img-note" v-bind:src="img">
    </label>
    </section>
    `,
    props: ['info'],
    data() {
        return {
            url: '',
            img: this.info.src
        }
    },
    methods: {
        reportVal() {
            this.$emit('setVal', this.val)
        },
        saveImg() {
            console.log(this.url)
            this.img = this.url

        },
        deleteNote() {
            const id = this.info.id
            noteService.deleteNote(id)
         },
         saveNote(){
           var note ={
             type: 'img',
             info: {
                 img: this.img,
                 id: utilService.makeId(),
             }
           }
             console.log('saving')
             noteService.saveNote(note)
         }
    }
}