import googleService from '../services/google.service.js'

import {
    bookService
} from '../services/book.service.js'
import eventBus, {
    SHOW_MSG
} from '../event-bus.js'


export default {
    template: `
    <section>
    <h1>books from google</h1>
    <input type="text" autofocus placeholder="search by title" v-model="filterBy.title" @input="filter" />
     <div v-for="(book, idx) in books">
     <button v-on:click ="addingBook(book,idx)">+</button>
         {{book.volumeInfo.title}}
     </div>

    
</section>
    `,
    data() {
        return {
            // books: storageService.load('google-books'),
            books: null,
            filterBy: {
                title: ''
            }
        }
    },
    created() {
        console.log('created')
        // var books = storageService.load('google-books')
        // console.log('chen', this.books)
    },
    methods: {
        addingBook(book, idx) {
            console.log('in comp book is adding', book, idx)
            bookService.addingBookFromGoogle(book)
            // console.log('book', book);

            eventBus.$emit(SHOW_MSG, {
                txt: `Book ${book.volumeInfo.title} was successfully added`, type: 'success'
            })


        },
        filter() {
            console.log('filtered by', this.filterBy.title);
            googleService.getBookFromGoogle(this.filterBy.title)
                .then(books => {
                    this.books = books
                })

        },
      
    },



}