import { emailService } from '../../services/email-service.js'
export default {
    name: 'emailStatus',

    template: `
    <section class="status-container"  >
        <!-- <p>Read emails <b>{{coutEmailRead*100}}%</b></p> -->
        <meter v-bind:value="coutEmailRead"></meter>
    </section> 
    `
    ,
    data() {
        return {
            emails: [],
            read: []
        }
    },
    methods: {
        
    },
    computed: {
        coutEmailRead() {
            const readEmail = this.emails.filter(email => { return email.isRead === true })
            let all = this.emails.length
            let read = readEmail.length
            let num = (read/all)
            let roundNum = parseFloat(Math.round(num * 100) / 100).toFixed(2);
            
            return roundNum
        },

    },



    
    created() {
        emailService.query()
            .then(emails => {
                this.emails = emails
            })
    },
    components: {

    }
}