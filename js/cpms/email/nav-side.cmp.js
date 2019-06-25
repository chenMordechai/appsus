import emailStatus from './email-status.cmp.js'
import emailCompose from './email-compose.cmp.js'
import {
    emailService
} from '../../services/email-service.js'


export default {
    name: 'navSide',
    template: `
         <nav class= "nav" > 
       
             <email-compose> </email-compose>
             <router-link exact to="/email"> <h2 v-on:click="openInbox"><i class="fas fa-inbox"></i> Inbox </h2></router-link>
             <router-link exact to="/email"><h2 v-on:click="openFavirit" > <i class="fas fa-star"></i> Favorite</h2></router-link>
             <router-link exact to="/email"> <h2 v-on:click="openRead" > <i class="fas fa-envelope-open"></i> Read </h2></router-link>
             <router-link exact to="/email"> <h2 v-on:click="openUnRead" > <i class="fas fa-envelope"></i> Unread </h2></router-link>
             <router-link exact to="/email"><h2 v-on:click="openDeleted" > <i class="fas fa-trash"></i> Trash </h2></router-link>
             <email-status> </email-status>
             <!-- <div ><router-link exact to="/book"><div class="book"></div></router-link> </div>  -->

         </nav>
    `,
    data() {
        return {
            isFavorit: false,
            isRead:false,
            isUnRead:false,
            inbox:false,
            isDeleted:false
        }
    },
    created() {
        emailService.query()
            .then(emails => {
                this.emails = emails
            })
    },
    methods: {

        openFavirit() {
            this.isFavorit =true
            console.log('open-favorit')
            this.$emit('open-favorit', this.isFavorit);
        },
        openRead(){
            this.isRead =true
            console.log('open-read')
            this.$emit('open-read', this.isRead);
        },
        openUnRead(){
            this.isUnRead =true
            this.$emit('open-unread', this.isUnRead);
        },
        openInbox(){
            this.inbox =true
            this.$emit('open-inbox', this.inbox);
        },
        openDeleted(){
            this.isDeleted =true
            this.$emit('open-deleted', this.isDeleted);
        }

    },

    components: {
        emailStatus,
        emailCompose
    }



}
// function toggleMenu() {
//     document.body.classList.toggle('open-menu');
//     if (document.querySelector('.menu-btn').innerText === "☰") {
//         document.querySelector('.menu-btn').innerHTML = "X"
//     } else {
//         document.querySelector('.menu-btn').innerHTML = "☰"
//     }
// }