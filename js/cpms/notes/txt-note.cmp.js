import
noteService
   from '../../services/note-service.js'
export default {
   name: 'txtNotes',

   template: `
   <section  v-bind:style=" note.info" class="txt-note" >
      <label>
     
          <p>{{info.txt}}</p>
          <input class="color-picker" type='color' v-model="note.info['background-color']" >
          <input class="color-picker" type='color' v-model="note.info.color">
   <button  v-on:click="pintNote"><i class="fas fa-thumbtack"></i></button>
<button v-on:click="deleteNote"><i class="fas fa-trash"></i></button>


</label>
</section>
`,
   props: ['info'],
   data() {
       // <button v-on:click="saveTxt">Save</button>
       return {

           note: {
               type: 'txt',
               info: {
                   txtVal: '',
                   isDone: false,
                   color: '',
                   'background-color':'',

               },

           }



       }
   },
   methods: {
      deleteNote(){
    console.log('this.info',this.info)
    const id = this.info.id
    noteService.deleteNote(id)
    },
    pintNote(){
        const id = this.info.id
        noteService.pintNote(id)
    },
  

   },
   computed: {


   },

   mounted() {
       console.log('')
   },


   created() {

   },
   components: {

   }
}