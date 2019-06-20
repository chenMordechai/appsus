import appHeader from './cpms/app-header.cmp.js'
import theRoutes from './routes.js'
const myRouter = new VueRouter({ routes: theRoutes })


new Vue({
    el: '#app',
    template:`
        <div>
            <app-header></app-header>
            <router-view></router-view>
        </div>

    `
    ,components: {
            appHeader
    },
    router: myRouter
})
