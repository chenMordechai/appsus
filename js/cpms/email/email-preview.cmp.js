export default {
    template: `
    <section>
   
    <router-link :to="emailUrl" >
    <li class="single-email">
    <h3> {{email.from}}</h3> 
    <h3> {{email.title}}</h3>
    <h3> {{email.txt}}</h3>
    <h3> {{email.date}}</h3>
    </li>
    </router-link>
    </section>
    `,
    props: ['email'],
data() {
    return {}
},
created() {
},
computed:{
    emailUrl() {
        
        return '/email/' + this.email.id
    },
    

},method:{
},

}