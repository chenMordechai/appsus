export default {
    template: `
        <section class="email-filter-container">
        <input type="text" autofocus placeholder="search" v-model="filterBy.title"  @input="emitFilter"  />
        <select v-model="filterBy.isRead" @change="emitFilter($event)"  >
        <option>All</option>
                         <option>Read</option>
                         <option>UnRead</option>
                     </select>
                     <!-- <button v-on:click="emitFilter"><i class="fas fa-search"></i></button> -->
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
        emitFilter(event) {
            this.filterBy.isRead = event.target.value
            console.log(this.filterBy)
            this.$emit('filtered', this.filterBy);

        }
    },
    computed: {

    }
}