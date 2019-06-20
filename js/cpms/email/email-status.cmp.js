import { emailService } from '../../services/email-service.js'
export default {
    name: 'emailStatus',

    template: `
    <section >
        <h1>Email Status</h1>
        <p>read emails {{coutEmailRead}}%</p>
    </section>
    `
    ,
    data() {
        return {
            emails: [],
            read: []
        }
    },
    method: {},
    computed: {
        coutEmailRead() {
            const readEmail = this.emails.filter(email => { return email.isRead === true })
            let all = this.emails.length
            let read = readEmail.length
            return (read/all)*100
        },

    },



    
    created() {
        emailService.query()
            .then(emails => {
                this.emails = emails
                console.log(this.emails)
            })
    },
    components: {

    }
}