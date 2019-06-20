import emailStatus from './email-status.cmp.js'
import emailCompose from './email-compose.cmp.js'


export default {
    name: 'NavSide',
    template: `
            <nav class= " nav-side">
                    <h1>nav-side</h1>
                    <email-status> </email-status>
                    <email-compose> </email-compose>
         </nav>
    `,
    data() {
        return {}
    },

    components: {
        emailStatus,
        emailCompose
    }



}