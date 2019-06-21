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
    // v-bind:class="{readClass}"
    props: ['email'],
data() {
    return {
        
    }
},
created() {
    
   
},

computed:{
    emailUrl() {
        // console.log('bla bla',this.email.id)
        return '/email/' + this.email.id
    },
        // readClass() {
        //     console.log('isRead',isRead)
        //     let isRead = this.email.isRead
        //     let isUnread = !this.email.isRead

        //     let className=''
        //     if (isRead) return className = 'read'
        //     if (isUnread) return className = 'unread'
        // },
    

},method:{
},

}