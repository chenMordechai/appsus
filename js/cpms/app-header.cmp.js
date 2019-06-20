export default {
    name: 'TheAppHeader',
    template: `
        
       <header>
                
                <nav >
                    <router-link exact to="/">Home</router-link> | 
                    <router-link to="/note">Note</router-link> |
                    <router-link exact to="/email">Email</router-link> 
                    <!-- <router-link to="/book">Book</router-link> |
                    <router-link to="/bookAdd">google-Book</router-link>  -->

                </nav>
                
            </header>    
    
    
    `,
    data() {
        return {}
    },

    components: {

    }
}