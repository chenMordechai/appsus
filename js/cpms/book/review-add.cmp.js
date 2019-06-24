import {
    bookService
} from "../../services/book.service.js"
import eventBus, {SHOW_MSG} from '../../event-bus.js'

export default {
    template: `
    <section>
           <h1> review: </h1>
           <form @submit.prevent="saveBook">
               Your Name: <input ref="txtName" v-model="bookReview.name" autofocus placeholder="name" type="text">
                Rate: <select v-model="bookReview.rate" >
                         <option>1</option>
                         <option>2</option>
                         <option>3</option>
                         <option>4</option>
                         <option>5</option>
                     </select>
                   
              Reading At: <input type="date"  v-model="bookReview.readAt"/>
              <br>
                <textarea v-model.trim="bookReview.text" placeholder="Add Sum Lines"></textarea>
                <br>
                <button :disabled="invalid">Save</button>
            </form>
            <div class = "reviews"  v-for="(currentReview, idx) in book.reviews" >
            <div class="review">
            <button v-on:click ="deleteReview(idx)">x</button>
           name: {{currentReview.name}}
           <br>
           rate: {{currentReview.rate}}
           <br>
           read at: {{currentReview.readAt}}
           <br>
           description: {{currentReview.text}}
            </div>
            </div>
        </section>
    `,

    data() {
        return {
            // book: null,
            bookReview: {
                name: 'Books Reader',
                rate: '',
                readAt: '',
                text: '',

            }
        }
    },
    props: ['book'],
    mounted() {
        // console.log('REFS:', this.$refs);
        this.$refs.txtName.focus();

    },
    created() {
        // console.log('paramsss', this.$route.params.bookId)
        // const bookId = this.$route.params.bookId;
        // bookService.getById(bookId)
        //     .then(book => this.book = book)


        var x = new Date
        this.bookReview.readAt =x.getFullYear()+ '-' + (x.getMonth() + 1) + '-' + x.getDate()  
        console.log(this.bookReview.readAt)

    },
    methods: {

        deleteReview(idx) {
            console.log('deleted', idx)
            const bookId = this.$route.params.bookId
            const reviewId = idx
            bookService.dleateReview(bookId, reviewId)
            eventBus.$emit(SHOW_MSG,
                { txt: 'Delete review Successful!', type: 'failure'})

        },


        saveBook() {
            const review ={...this.bookReview} 
            const bookId = this.$route.params.bookId
            bookService.saveReview(bookId, review)
            eventBus.$emit(SHOW_MSG,
                { txt: 'Adding review Successful!', type: 'success'})

        },


    },
    computed: {
        // showReview() {
        //     return 'lala'
        // },

        invalid() {
            // return !this.book.desc || this.car.checkedNames.length === 0
        }

    },

}