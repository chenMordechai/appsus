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
       <label >
       <h1>todos</h1>
       <!-- {{info}} -->
<<<<<<< HEAD
       <button><i class="fas fa-thumbtack"></i></button>
       <button v-on:click="deleteThisNote"><i class="fas fa-trash"></i></button>
       <button v-on:click="saveNote"><i class="fas fa-plus"></i></button>

=======
       <!-- <button v-on:click="saveNote"><i class="fas fa-plus"></i></button> -->
       
       <br>
       <input type='text' v-model="txt" @change="reportVal" >
       <button v-on:click="saveTodo"> add</button>
>>>>>>> b62d3be7abde9649ba4daf2c2029399cdb2acceb
       <br>
      <!-- <input type='text' v-model="txt" @change="reportVal" >
      <button v-on:click="saveTodo"> save</button>
<<<<<<< HEAD
      <!-- <input type='color' v-model="note.info.background-color" @change="reportVal">BCG</input><br>
=======
      <input type='color' v-model="note.info.background-color" @change="reportVal">BCG</input><br>
>>>>>>> b62d3be7abde9649ba4daf2c2029399cdb2acceb
       <input type='color' v-model="note.info.color" @change="reportVal">TXT</input> -->
      <br>
      <div class="todo-container" v-if="info" v-for="(todo,idx) in todos">
    <button v-on:click ="deleteTodo(idx)"> X</button> 
    <button v-on:click ="doneTodo(idx)"> V</button> 
    <p v-bind:class="{'isDone': todos[idx].isDone, 'isntDone': !todos[idx].isDone }"> {{todo.txt}} </p>
<<<<<<< HEAD
    </div>
   
=======
</div>
<button  v-on:click="pintNote"><i class="fas fa-thumbtack"></i></button>
<button v-on:click="deleteNote"><i class="fas fa-trash"></i></button>

>>>>>>> b62d3be7abde9649ba4daf2c2029399cdb2acceb

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
            // creatAt: getTime() ,
        }
    },
    methods: {
        reportVal() {
            this.$emit('setVal', this.txt)
        },
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