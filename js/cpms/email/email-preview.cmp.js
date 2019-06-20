


export default {
    template: `
    <section>
   
    <router-link :to="emailUrl" >
    <li class="single-email">
    <h4> {{email.from}}</h4> 
    <p> {{email.title}} <span> {{email.txt}}</span></p>
  
    <h4> {{email.date}}</h4>
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
        // console.log('bla bla',this.email.id)
        return '/email/' + this.email.id
    },
    

},method:{
},

}