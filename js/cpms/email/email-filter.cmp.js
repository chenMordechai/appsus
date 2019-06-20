export default {
    template: `
        <section class="email-filter-container">
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