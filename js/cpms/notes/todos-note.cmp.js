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
       <button><i class="fas fa-thumbtack"></i></button>
       <button v-on:click="deleteNote"><i class="fas fa-trash"></i></button>
       <button v-on:click="saveNote"><i class="fas fa-plus"></i></button>

       <br>
      <input type='text' v-model="txt" @change="reportVal" >
      <button v-on:click="saveTodo"> save</button>
      <br>
      <div class="todo-container" v-for="(todo,idx) in todos">
    <button v-on:click ="deleteTodo(idx)"> X</button> 
    <button v-on:click ="doneTodo(idx)"> V</button> 
    <p v-bind:class="{'isDone': todos[idx].isDone, 'isntDone': !todos[idx].isDone }"> {{todo.txt}}  </p>
</div>

       </label>
    </section>
    `,
    props: ['info'],
    data() {
        return {
            txt: '',
            todos: this.info.todos,
            isDone: false,
            // creatAt: getTime() ,
        }
    },
    methods: {
        reportVal() {
            this.$emit('setVal', this.txt)
        },
        saveTodo() {
            this.todos.unshift({
                txt: this.txt,
                isDone: false
            })
            console.log('saving', this.todos)
            this.txt = ''

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
        deleteNote() {
            const id = this.info.id
            noteService.deleteNote(id)
        },
        saveNote() {
            console.log('saving note')
            var note = {
                type: 'todos',
                info: {
                    id: utilService.makeId(),
                    label: 'i am label of todos',
                    todos: this.todos,
                    editor: [],
                }
            }
            noteService.saveNote(note)
        }
       
    }
}