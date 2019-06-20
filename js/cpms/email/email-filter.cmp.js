export default {
    template: `
        <section class="book-filter">
        <h1>Email Filter</h1>
        <input type="text" autofocus placeholder="search" v-model="filterBy.title"  />
        <select v-model="filterBy.isRead" >
        <option>All</option>
                         <option>Read</option>
                         <option>UnRead</option>
                     </select>
                     <button v-on:click="emitFilter">search</button>
    </section>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                isRead: 'All',
            }
        }
    },
    methods: {
        emitFilter() {
            console.log(this.filterBy)
            this.$emit('filtered', this.filterBy);

        }
    },
    computed: {

    }
}