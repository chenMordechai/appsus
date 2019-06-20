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

    // console.log('email preview has created');
},
computed:{
    emailUrl() {
        // console.log('bla bla',this.email.id)
        return '/email/' + this.email.id
    },
    // emailUrl() {
    //     console.log(this.email.id)
    //     // return '/book/' + this.book.id
    // },

},method:{
},

}