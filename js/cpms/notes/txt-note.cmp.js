
export default {
    name: 'txtNotes',

    template: `
    <section   >
       <label>
       <h1>txt</h1>
      
       <div class="txt-note">
       <input type='text' v-model="txtVal" @click="reportVal" placeholder="typeHere" autofocus></input>
       <input type='color' v-model="colorVal" @change="reportVal">pickColor</input>
    <p>{{txtVal}}</p>
    <button v-on:click="saveNote">Save</button>
    </div>
</label>
</section>
`,
props:['info'],
data() {
    // <button v-on:click="saveTxt">Save</button>
    return{
       
            txtVal:'',
            colorVal:"#ffff00",
            isDone:false,
            

        
    }
    },
    methods: {
        saveNote(){
           {console.log(this)}
        },
        reportVal(){
            // console.log('this.val = ',this.val)
            this.$emit('setVal',this)
        },
    },
    computed: {
      

    },

mounted(){
    console.log('')
},

    
    created() {
     
    },
    components: {

    }
}