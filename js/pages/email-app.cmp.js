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
       <h1>Email App</h1>

    <email-filter></email-filter>
    <email-list :emails="emailsToShow"></email-list>
    <email-details ></email-details> 
    </div>

        </section>
    `,

    data() {
        return {
            emails: [],
    
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
            // if (!this.filter)
            console.log('in emails to show')
             return this.emails;
            // return this.books.filter(book => book.title.includes(this.filter.title)
          
         }
    },
    methods: {
        // setFilter(filter) {
        //     console.log('Book App got the filter', filter.title , filter.fromPrice , filter.toPrice);
        //     this.filter = filter
        // },
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