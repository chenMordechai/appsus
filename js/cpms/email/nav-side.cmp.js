import emailStatus from './email-status.cmp.js'
import emailCompose from './email-compose.cmp.js'
import { emailService } from '../../services/email-service.js'


export default {
    name: 'navSide',
    template: `
         <nav class= "nav" > 
       
         <email-status> </email-status>
         <email-compose> </email-compose>
         </nav>
    `,
    data() {
        return {

        }
    },
    created() {
        emailService.query()
            .then(emails => {
                this.emails = emails
            })
    },
    methods:{
      
        

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
