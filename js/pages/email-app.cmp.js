import navSide from '../cpms/email/nav-side.cmp.js'

import {
    emailService
} from '../services/email-service.js'
import emailFilter from '../cpms/email/email-filter.cmp.js'
import emailList from '../cpms/email/email-list.cmp.js'
import emailDetails from '../pages/email-details.cmp.js'


export default {
    name: 'emailApp',
    template: `
       <section class="email-page-comtainer">
       <nav-side> </nav-side>
       <div class="emailApp-container">
    <email-filter @filtered="setFilter"></email-filter>
    <email-list :emails="emailsToShow"></email-list>
    <email-details ></email-details> 
    </div>

        </section>
    `,

    data() {
        return {
            emails: [],
            filter: null,
            // selectedEmail: ''

        }
    },
    created() {
        emailService.query()
            .then(emails => {
                this.emails = emails
                console.log(this.emails)
            })

    },
    computed: {
        emailsToShow() {
            if (!this.filter) return this.emails;
            else if(this.filter.isRead=== 'Read'){
                return this.emails.filter(email =>{
                 email.title.includes(this.filter.title)
                &&  email.isRead === true })
            }else if(this.filter.isRead=== 'UnRead'){
                return this.emails.filter(email =>{ email.title.includes(this.filter.title)
                &&  email.isRead=== false} )
            }else return this.emails
        
        // }
        // emailsToShow() {
        //     if (!this.filter) return this.emails;
        //     else if(this.filter.ifRead=== 'Read'){
        //        const x= this.emails.filter(email =>{
        //          return email.ifRead === true })
        //          console.log('chenchen,',x)
        //     }else if(this.filter.ifRead=== 'UnRead'){
        //         return this.emails.filter(email =>{   email.ifRead=== false} )
        //     }else return this.emails
        
        // }

        
    },
    methods: {
        setFilter(filter) {
            console.log('Book App got the filter', filter.title, filter.ifRead);
            this.filter = filter
        },
        // selectBook(bookId) {
        //     this.selectedBook = this.books.find(book => book.id === bookId)
        //     console.log(this.selectedBook,'selected book is');

        // },

        // hideDetails() {
        //         this.selectedBook = null
        // }

    },
    components: {
        emailFilter,
        emailList,
        emailDetails,
        navSide
    }
}