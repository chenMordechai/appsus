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
           <div class="nav-side">
                <nav-side @open-deleted="setDeleted" @open-inbox="setInbox" @open-favorit="setFavor" @open-unread="setUnRead" @open-read="setRead"> </nav-side>
            </div>
            <div class="emailApp-container">
            <email-filter @filtered="setFilter" @sorted="setSort"></email-filter>
            <email-list :emails="emailsToShow"></email-list>
        </div>
       
       </section>
       `,
    //    @favorite="showFavor"     
    //    <button v-on:click="showFavor">in the app</button>
    data() {
        return {
            emails: [],
            filter: null,
            sortBy: null,
            isFavor: false,
            isRead: false,
            isUnRead:false,
            inbox: false,
            iSdeleted: false,
            recentlyDeleted:[]
        }
    },
    mounte() {
        console.log('this.emails', this.emails)
    },
    created() {
        emailService.query()
            .then(emails => {
                this.emails = emails
                // console.log('emails',emails)
                // console.log('in the app',this.emails)
            })
            emailService.getDeleted()
            .then(emails => {
                this.recentlyDeleted = emails
                // console.log('in the app',this.emails)
            })

    },
    computed: {
        emailsToShow() {
            console.log('IN COMPUTED!')
            console.log(this.emails)
            if (this.inbox) {
                if(this.filter){
                    return this.emails.filter(email => email.title.includes(this.filter.title) )
                }
                return this.emails
            } else if (this.isFavor) {
                if(this.filter){
                    return this.emails.filter(email => email.title.includes(this.filter.title) &&
                    email.isFavorite === true )
                }
                return this.emails.filter(email => email.isFavorite === true)
            } else if (this.isRead) {
                if(this.filter){
                    return this.emails.filter(email => email.title.includes(this.filter.title) &&
                    email.isRead === true)
                }
                return this.emails.filter(email => email.isRead === true)
            }
            else if (this.isUnRead) {
                if(this.filter){
                    return this.emails.filter(email => email.title.includes(this.filter.title) &&
                    email.isRead === false)
                }
                return this.emails.filter(email => email.isRead === false)
            }
            else if(this.iSdeleted){
                if(this.filter){
                    return this.recentlyDeleted.filter(email => email.title.includes(this.filter.title) &&
                    this.recentlyDeleted)
                }
                return this.recentlyDeleted
            }
            
            
            if (!this.filter) return this.emails;
            // else if (this.filter.isRead === 'Read') {
            //     console.log(this.filter.isRead)
            //     return this.emails.filter(email => email.title.includes(this.filter.title) &&
            //         email.isRead === true)
            // } else if (this.filter.isRead === 'UnRead') {
            //     console.log(this.filter.isRead)
            //     return this.emails.filter(email => email.title.includes(this.filter.title) &&
            //         email.isRead === false)
            // } 
            else if (this.filter) {
                return this.emails.filter(email => email.title.includes(this.filter.title))
            }
        }

    },
    // showFavor(){

    //         return this.emails.filter(email =>email.isFavorite === true)
    // },  
    //     console.log('this.emails',this.emails)
    //     let nadav = this.emails.filter(email => email.isFavorite === true)
    //     console.log('nadav',nadav)
    //     emailService.showFavorite(onlyFavor)
    // }
    methods: {
        setFilter(filter) {
            console.log('email App got the filter', filter.title, filter.isRead);
            this.filter = filter
        },

        setSort(sort) {
            console.log('email app got the sort ', sort)
            this.sortBy = sort
            console.log(this.emails)
            emailService.sortEmail(this.emails, sort)
        },
        setFavor(favoer) {
            this.inbox = false
            this.isRead = false
            this.isFavor = favoer
            this.iSdeleted = false

            console.log(this.isFavor)
        },
        setRead(read) {
            this.isRead = read
            this.inbox = false
            this.isFavor = false
            this.iSdeleted = false
            this.isUnRead = false

            console.log(this.isRead)
        },

        setUnRead(unread){
            this.isUnRead = unread
            this.inbox = false
            this.isRead = false
            this.isFavor = false
            this.iSdeleted = false

        },
        setInbox(inbox) {
            this.inbox = inbox
            this.isRead = false
            this.isFavor = false
            this.iSdeleted = false
            this.isUnRead = false

        },
        setDeleted(deleted) {
            this.iSdeleted = deleted
            this.inbox = false
            this.isRead = false
            this.isFavor = false
            this.isUnRead = false

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