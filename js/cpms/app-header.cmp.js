export default {
    name: 'TheAppHeader',
    template: `
        
       <header>
                
                <nav >
                    <div class="grassus">
                    <i class="fas fa-cannabis"></i>
                    <h1>grassus</h1>
</div>

                    <ul class="ham-btn">
                    <div  v-bind:class="{option:!isHeaders}">
                <li v-on:click="toggleHeders" v-bind:class="{ headers:isHeaders}"><router-link class="ho"  exact to="/"><i class="fas fa-home"></i></router-link> </li> 
                <li v-on:click="toggleHeders" v-bind:class="{ headers:isHeaders}"><router-link class="no"  to="/note"><i class="fas fa-sticky-note"></i></router-link> </li>
                <li v-on:click="toggleHeders" v-bind:class="{headers:isHeaders}"><router-link class="em"  exact to="/email"><i class="fas fa-at"></i></router-link></li> 

                <li v-on:click="toggleHeders" v-bind:class="{headers:isHeaders}"><router-link class="em"  exact to="/email"><i class="fas fa-book"></i></router-link></li> 

            </div>


<!-- <router-link to="/book">Book</router-link> |
<router-link to="/bookAdd">google-Book</router-link>  -->
</ul>
<i  v-on:click="toggleHeders" class="grid fas fa-th"></i>

                </nav>
                
            </header>    
    
    
    `,
    data() {
        return {
            isHeaders: true
        }
    },
    methods: {
        toggleHeders() {
            console.log('in the func')
            console.log('isHeaders', this.isHeaders)
            this.isHeaders = !this.isHeaders
            console.log('isHeaders', this.isHeaders)
        }
    },

    components: {

    }
}