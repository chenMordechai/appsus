export default {
    name: 'imgNotes',

    template: `
    <section   >
       <label>
       <h1>Image</h1>
       {{info.label}}
       <input type='text' v-model="val" @change="reportVal"></input>
       
       </label>
    </section>
    `,
    props:['info'],
    data() {
    return{
        val:'',
    }
    },
    methods: {
        reportVal(){
            this.$emit('setVal',this.val)
        },
    },
    computed: {
      

    },



    
    created() {
     
    },
    components: {

    }
}