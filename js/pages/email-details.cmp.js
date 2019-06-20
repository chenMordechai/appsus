
import {
    emailService
} from "../services/email-service.js"

export default {
    template: `
    <section class="emailDetails-container" v-if="email">
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
               <button> answer</button>   <button>forward</button>
               </div>
                </div>
        </section>
    `,
    data() {
        return {
            email: {
                id: '14geh5',
                title: 'whats up??',
                txt: 'i am miss you so nutch',
                from: 'nadav sabah',
                date: '20/3/2019',
                isRead: false,
                isFavorite: false,
                isTrash: false
            },

        }
    },
    created() { //get id from route.params
        // console.log('params:', this.$route.params.emailId);
        // const emaiId = this.$route.params.emailId;
        // emailService.getEmailById(emaiId)
        //     .then(email => this.email = email) 
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
         }
    },
    components: {
     
    }

}