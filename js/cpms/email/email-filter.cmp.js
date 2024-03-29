import navSide from '../email/nav-side.cmp.js'



export default {
    template: `
        <section class="email-filter-container">
            <!-- <div class="nav-side-in-mobile"> -->
            <nav-side class="nav-side nav-side-in-mobile" v-if="openNav"></nav-side>
<!-- </div> -->
            <div class="btn-filter-container">
 <button class="menu-btn" v-on:click="toggleMenu">☰</button>
        <input type="text" autofocus placeholder="search" v-model="filterBy.title"  @input="emitFilter"  />
        <!-- <select v-model="filterBy.isRead" @change="emitFilter"  >
        <option>All</option>
                         <option>Read</option>
                         <option>UnRead</option>
                        
                     </select> -->
                     <select v-model="sortBy" @change="emitSort($event)" >
                   
        <option>Sort By</option>
                         <option>Title</option>
                         <option>Date</option>
                     </select>
</div>
                     <!-- <button v-on:click="emitFilter"><i class="fas fa-search"></i></button> -->
    </section>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                // isRead: 'All',
            },
            sortBy: 'Sort By',
            openNav: false,
        }
    },
    methods: {
        toggleMenu() {
            console.log('togle')
            this.openNav = !this.openNav
        },
        emitFilter() {

            console.log('emit filter by', this.filterBy)
            this.$emit('filtered', this.filterBy);

        },
        emitSort(event) {
            this.sortBy = event.target.value
            console.log('this.soryBt', this.sortBy)
            this.$emit('sorted', this.sortBy);

        },

    },

    computed: {

    },
    components: {
        navSide
    }
}