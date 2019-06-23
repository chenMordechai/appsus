export default {
    name: 'todosNotes',

    template: `
    <section>
       <label>
       <h1>todos</h1>
       {{info}}
    //    <input type='text' v-model="val" @change="reportVal"></input>
       
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

    },
}