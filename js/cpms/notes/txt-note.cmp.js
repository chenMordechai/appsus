import
noteService
    from '../../services/note-service.js'
export default {
    name: 'txtNotes',

    template: `
    <section  v-bind:style=" note.info" class="txt-note" >
       <label>
       <h1>txt</h1>
      
       <input type='text' v-model="note.info.txtVal" @click="reportVal" placeholder="typeHere" autofocus></input>
       <input type='color' v-model="note.info['background-color']" @change="reportVal">BCG</input><br>
       <input type='color' v-model="note.info.color" @change="reportVal">TXT</input>
    <p>{{note.info.txtVal}}</p>
       
    <button v-on:click="saveNote">Save</button>

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
        saveNote() {
            // console.log('this.note',this.note)
            noteService.saveTxt(this.note)

        },
        reportVal() {
            // console.log('this.val = ',this.val)
            this.$emit('setVal', this)
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