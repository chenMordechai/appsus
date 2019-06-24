export default {
    template: `
        <section class="book-filter">
        <input type="text" autofocus placeholder="search by title" v-model="filterBy.title" @input="emitFilter" />
        <input type="number" autofocus placeholder="from price" v-model="filterBy.fromPrice" @input="emitFilter" />
        <input type="number" autofocus placeholder="to price" v-model="filterBy.toPrice" @input="emitFilter" />
        </section>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                fromPrice: '',
                toPrice: ''

            }
        }
    },
    methods: {
        emitFilter() {
            console.log('emit filter', this.filterBy)
            this.$emit('filtered', this.filterBy);

        }
    }
}