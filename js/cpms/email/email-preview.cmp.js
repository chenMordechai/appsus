import {
    emailService
} from "../../services/email-service.js"

export default {
    template: `
    <section class="email-preview-container">
        <button class="trash" v-on:click="deleteEmail"><i class="fas fa-trash"></i></button>
        <button class="envelope" v-bind:class="{'fas fa-envelope-open': isOpen, 'fas fa-envelope': isClose }"
         v-on:click="markAdRead"></button>
<<<<<<< HEAD
        <button v-bind:class="{'far fa-star': isEmpty, 'fas fa-star': isFull }" v-on:click="favoriteEmail">
        </button>
        <button class="star" v-on:click="favoriteEmail" ><i class="far fa-star"></i></button>
=======
        <button class="star" v-bind:class="{'far fa-star': isEmpty, 'fas fa-star': isFull }" v-on:click="favoriteEmail">
        </button>
>>>>>>> eb701e79f4ef72cb58047f84ba96dbcebc93dbd2
        <router-link :to="emailUrl" >
            <li  v-on:click="markAdRead" v-bind:class="{read:email.isRead}" class="single-email">
    <h4>{{email.from}}</h4> 
    <p> {{email.title}} <span> {{textToShow}}</span></p>    
  
    <h4> {{email.date}}</h4>
    </li>
    </router-link>
    </section>
    `,
    
    props: ['email'],
data() {
    return {
        isClose: !this.email.isRead,
        isOpen: this.email.isRead,
        isRead: this.email.isRead,
        isFull:this.email.isFavorite,
        isEmpty:!this.email.isFavorite
    }
},
created() {
    
    },
   


computed:{
    emailUrl() {
        return '/email/' + this.email.id
    },
    

    textToShow() {
        return this.email.txt.substring(0, 50)
    },
   
},methods:{
        readClass() {
      console.log('this.email',this.email)
      console.log('isMark',this.isMark)
      this.isMark = true
      this.email.isRead = true
    
                  
    },
   
},methods:{
    favoriteEmail(){
        // console.log('favorite')
        const emailId =this.email.id
        emailService.faviriteEmail(emailId)
        this.isFull = !this.isFull
        this.isEmpty = !this.isEmpty
        console.log('this.email-in the preview',this.email)
    },
    deleteEmail(){
        console.log('deleting')
        const emailId =this.email.id
        console.log('email id = ', emailId)
         emailService.dleateEmail(emailId)
        
     },
     markAdRead(){
        //  console.log('mark as read')
         const emailId =this.email.id
         emailService.markRead(emailId)
         this.isOpen = !this.isOpen 
        //  console.log('this.email',this.email)
        //  console.log('isOpen',this.isOpen)
         this.isClose = !this.isClose
        //  console.log('isClose',this.isClose)         
     }
},


}