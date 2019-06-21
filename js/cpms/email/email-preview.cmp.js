import {
    emailService
} from "../../services/email-service.js"

export default {
    template: `
    <section>
       
        <!-- <button v-on:click.native="deleteEmail"><i class="fas fa-trash"></i></button> -->
        <router-link :to="emailUrl" >
            <li class="single-email">
    <h4>{{email.from}}</h4> 
    <p> {{email.title}} <span> {{textToShow}}</span></p>
  
    <h4> {{email.date}}</h4>
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
        //     if(this.email.isRead===true){
        //         console.log('read')
        //         return 'read'
        //     }
        //     else {
        //         console.log('unRead')
        //         return 'unread'
        //     }

           
            // if (isRead) return 'read'
            // if (isUnread) return 'unread'
        // },
    
    textToShow() {
        return this.email.txt.substring(0, 60)
    },
},method:{
    test(){
        console.log('chen')
    }
    // deleteEmail(){
    //     console.log('deleting')
    //     const emailId =this.email.id
    //     console.log('email id = ', emailId)
    //      emailService.dleateEmail(emailId)
        
    //  }
},


}