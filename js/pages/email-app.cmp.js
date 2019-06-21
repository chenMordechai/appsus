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
       <email-filter @filtered="setFilter" @sorted="setSort"></email-filter>
       <email-list :emails="emailsToShow"></email-list>
       </div>

        </section>
    `,

    data() {
        return {
            emails: [],
            filter: null,
            sortBy: null,
            // selectedEmail: ''

        }
    },
    created() {
        emailService.query()
            .then(emails => {
                this.emails = emails
                // console.log(this.emails)
            })

    },
    computed: {

        emailsToShow() {
            if (!this.filter) return this.emails;
            else if (this.filter.isRead === 'Read') {
                console.log(this.filter.isRead)
                return this.emails.filter(email => email.title.includes(this.filter.title) &&
                    email.isRead === true)
            } else if (this.filter.isRead === 'UnRead') {
                console.log(this.filter.isRead)
                return this.emails.filter(email => email.title.includes(this.filter.title) &&
                    email.isRead === false)
            } else if (this.filter.isRead === 'All') {
                return this.emails.filter(email => email.title.includes(this.filter.title))
            }
        }

    },
    methods: {
        setFilter(filter) {
            console.log('email App got the filter', filter.title, filter.isRead);
            this.filter = filter
        },

        setSort(sort) {
            console.log('email app got the sort ',sort) 
            this.sortBy = sort
            console.log(this.emails)
            emailService.sortEmail(this.emails,sort)
        }



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