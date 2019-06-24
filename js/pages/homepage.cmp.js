export default {
    template: `
    <section class="home">
     
        <div ><router-link class="em"  exact to="/email"><div class="email"></div></router-link></div> 
        <div><router-link class="no"  to="/note"><div  class="note"></div></router-link> </div>
        <div ><router-link class="ho"  exact to="/book"><div class="book"></div></router-link> </div> 

    </section>
    `
}