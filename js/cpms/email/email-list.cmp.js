import emailPreview from './email-preview.cmp.js'
import {
    emailService
} from "../../services/email-service.js"

export default {
    template: `
    <section>
    
    <ul  class="email-list">
        <email-preview
     
         v-for="(currentEmail) in emails"
         v-bind:key="currentEmail.id"
          v-bind:email="currentEmail"
          >
         {{emails}}
        </email-preview>
      
    </ul>
</section>
    `,
    props: ['emails'],
    mounted(){

    console.log('in the mounted')
    console.log('emails = ',this.emails )

},


    data(){
       
        return {
            
            
          }
    },
    created(){
       
// console.log('created in the list')
// console.log('emails',this.emails)
    },

methods:{
    
  
},
computed:{
    
    },
    components:{
        emailPreview
    },
    method:{
       
        }
    
}