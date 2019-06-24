import bookPreview from './book-preview.cmp.js'


export default {
    template: `
    <section>
            <ul class="book-list">
                <book-preview @selected="theSelectedBook" 
                v-for="currentBook in books" 
                v-bind:key="currentBook.id" 
                v-bind:book="currentBook">
                </book-preview>
            </ul>
        </section>
    `,
    props: ['books'],
    data() {
        return {

        }
    },
    computed: {

    },
    created() {
        // console.log('Book-List was created!');
    },
    methods: {
        theSelectedBook(id) {
            console.log('in the father', id)
            this.$emit('selected', id);
        }

    },
    components: {
        bookPreview
    }
}