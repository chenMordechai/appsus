import navSide from '../cpms/email/nav-side.cmp.js'

import {
    emailService
} from "../services/email-service.js"

export default {
    template: `

    <section class="email-open-container" v-if="email">
    <nav-side> </nav-side>
<div class="emailDetails-container">
    <button ><router-link :to="emailUrl" ><i class="fas fa-long-arrow-alt-left"></i></router-link></button> 
                     <button v-on:click="deleteEmail"><i class="fas fa-trash"></i></button>
                <h2>{{email.title}}</h2>
                <div class="emailFrom">
              <h3 ><i class="fas fa-user-circle"></i> {{email.from}}</h3>
              <h3>{{email.date}}</h3>
              </div>
               <p>{{email.txt}}</p>
                <br>
                <div class="email-button">
            <button>forward <i class="fas fa-reply"></i> </button>  <button v-on:click="reply">reply <i class="fas fa-arrow-right"></i></button>   
               </div>
                </div>
</div>
        </section>
    `,
    data() {
        return {
            email: null

        }
    },
    created() { //get id from route.params
        console.log('params:', this.$route.params.emailId);
        const emaiId = this.$route.params.emailId;
        emailService.getEmailById(emaiId)
            .then(email => {this.email = email
              if(this.email) this.email.isRead = true}) 
        },
        
        mounted(){
         
            
        },
    
    computed: {
        emailUrl() {
            // console.log(this.book.id)
            return '/email'
        },  

    },

    methods: {
        deleteEmail(){
            const emailId =this.email.id
            console.log('email id = ', emailId)
             emailService.dleateEmail(emailId)
             this.$router.push('/email')
         },
         reply(){
             console.log('reply')
             const emailfrom = this.email.from
             console.log(emailfrom)
             //open the modal with the emailfrom
         }
    },
    components: {
        navSide
    }

}
