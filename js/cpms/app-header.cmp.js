export default {
    name: 'TheAppHeader',
    template: `
        
       <header>
                
                <nav >
                <ul class="ham-btn">
                    <div class="option">
                <li  v-bind:class="{ headers:isHeaders}"><router-link class="ho"  exact to="/">Home</router-link> </li> 
                <li  v-bind:class="{ headers:isHeaders}"><router-link class="no"  to="/note">Note</router-link> </li>
                <li  v-bind:class="{headers:isHeaders}"><router-link class="em"  exact to="/email">Email</router-link></li> 
</div>
                <button   v-on:click="toggleHeders">☰</button>
                    <!-- <router-link to="/book">Book</router-link> |
                    <router-link to="/bookAdd">google-Book</router-link>  -->
                    </ul>

                </nav>
                
            </header>    
    
    
    `,
    data() {
        return {
            isHeaders:true
        }
    },
    methods:{
        toggleHeders(){
            console.log('in the func')
            console.log('isHeaders',this.isHeaders)
            this.isHeaders = !this.isHeaders
            console.log('isHeaders',this.isHeaders)
        }
    },

    components: {

    }
}