import {
    utilService
} from '../../services/util.service.js'

import
noteService
from '../../services/note-service.js'


export default {
    name: 'todosNotes',

    template: `
    <section class ="todos-container">
    <!-- <input type="color" v-model="color"></input> -->
    <!-- <input type='color' v-model="['background-color']" >BCG</input><br> -->
       <!-- <input type='color' v-model="note.info.color">TXT</input> -->
       <label >
       <input type='text' v-model="txt"  placeholder="todo" >
       <i v-on:click="saveTodo" class="far fa-plus-square"></i>

      <div class="todo-container" v-if="info" v-for="(todo,idx) in todos">

    <button class="todoisdon" v-on:click ="deleteTodo(idx)"> X</button> 
    <p  v-on:click ="doneTodo(idx)" v-bind:class="{'isDone': todos[idx].isDone, 'isntDone': !todos[idx].isDone }"> {{todo.txt}} </p>

   
</div>
<button  v-on:click="pintNote"><i class="fas fa-thumbtack"></i></button>
<button v-on:click="deleteThisNote"><i class="fas fa-trash"></i></button>
 <!-- <input class="color-picker" type='color' v-model="['background-color']" > -->
          <input class="color-picker" type='color' v-model="info.color"> 



       </label>
    </section>
    `,
    props: ['info'],
    data() {
        return {
            id: utilService.makeId(),
            txt: '',
            todos: this.info.todos,
            isDone: false,
            newTodos:[],
            color: '',
            'background-color':'',
            
        }
    },
    methods: {
    
        saveTodo() {
            console.log()
            if(this.info){
                this.todos.push({
                    txt: this.txt,
                    isDone: false
                })
            }else{
                this.newTodos.push({
                    txt: this.txt,
                    isDone: false
            })
        }
            console.log('saving', this.todos)
            this.txt =''

        },
        deleteTodo(idx) {
            console.log(idx)
            this.todos.splice(idx, 1)
        },
        doneTodo(idx) {
            console.log(idx, this.todos[idx].isDone, 'is done')
            this.todos[idx].isDone = !this.todos[idx].isDone
            console.log(idx, this.todos[idx].isDone, 'is done')

        },
        deleteThisNote() {
           const id = this.info.id
           console.log('the id is: ',id)
           noteService.deleteNote(id)
        },
        pintNote(){
            const id = this.info.id
            noteService.pintNote(id)
        }
        // saveNote(){
        //   var note ={
        //     type: 'todos',
        //     info: {
        //         isPint:false,
        //         id: utilService.makeId(),
        //         todos: this.todos,
        //     }
        //   }
        //     console.log('saving')
        //     noteService.saveNote(note)
        // }
    },
    computed: {


    },

    created() {

    },
    components: {

    },
}