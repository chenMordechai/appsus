import {
    emailService
} from "../../services/email-service.js"

export default {
    template: `
    <section>

        <!-- <button v-on:click.nativ="deleteEmail"><i class="fas fa-trash"></i></button> -->
        <router-link :to="emailUrl"  >
            <li class="single-email">
    <h4>{{email.from}}</h4> 
    <p> {{email.title}} <span> {{textToShow}}</span></p>    
  
    <h4> {{email.date}}</h4>
    </li>
    </router-link>
    </section>
    `,
    // v-bind:class="{readClass}"
    // v-bind:class="{'read':isMark}"
    props: ['email'],
data() {
    return {
       
    }
},
created() {
    
   
},

computed:{
    emailUrl() {
        
        return '/email/' + this.email.id
    },
    
    textToShow() {
        return this.email.txt.substring(0, 60)
    },
   
},methods:{
        readClass() {
      console.log('this.email',this.email)
      console.log('isMark',this.isMark)
      this.isMark = true
      this.email.isRead = true
    
                  
    },
   
    // deleteEmail(){
    //     console.log('deleting')
    //     const emailId =this.email.id
    //     console.log('email id = ', emailId)
    //      emailService.dleateEmail(emailId)
        
    //  }
},


}