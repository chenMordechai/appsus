import navSide from '../email/nav-side.cmp.js'



export default {
    template: `
        <section class="email-filter-container">
            <nav-side v-if="openNav"></nav-side>
 <button class="menu-btn" v-on:click="toggleMenu">☰</button>


        <input type="text" autofocus placeholder="search" v-model="filterBy.title"  @input="emitFilter"  />
        <select v-model="filterBy.isRead" @change="emitFilter($event)"  >
        <option>All</option>
                         <option>Read</option>
                         <option>UnRead</option>
                     </select>
                     <select v-model="sortBy" @change="emitSort($event)"  >
        <option>Sort By</option>
                         <option>Title</option>
                         <option>Date</option>
                     </select>

                     <!-- <button v-on:click="emitFilter"><i class="fas fa-search"></i></button> -->
    </section>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                isRead: 'All',
            },
            sortBy:'Sort By',
            openNav: false,
        }
    },
    methods: {
        toggleMenu() {
            console.log('togle')
            this.openNav= true
        },
        emitFilter(event) {
            this.filterBy.isRead = event.target.value
            console.log(this.filterBy)
            this.$emit('filtered', this.filterBy);

        },
        emitSort(event) {
            this.sortBy = event.target.value
            console.log(this.sortBy)
            this.$emit('sorted', this.sortBy);

        }
    },

    computed: {

    },
    component:{
        navSide
    }
}