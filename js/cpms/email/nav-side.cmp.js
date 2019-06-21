import emailStatus from './email-status.cmp.js'
import emailCompose from './email-compose.cmp.js'


export default {
    name: 'NavSide',
    template: `
            <nav class= " nav-side"> 
                                  <email-status> </email-status>
                    <email-compose> </email-compose>
         </nav>
    `,
    data() {
        return {}
    },
    method:{
        

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
