import {
    emailService
} from '../../services/email-service.js'
import eventBus from '../../event-bus.js'

export default {
    name: 'emailCompose',

    template: `
    <div class="compose-container">
    <button v-on:click="openModal">+compose</button>

    <section  class="modal" v-show="isShown"> 
    <nav class="modal-nav">
        <h2>New Massage</h2>
    <form @submit.prevent="saveEmail">
    <input placeholder="To" ref="to" v-model="sentEmail.from" autofocus  type="text">
    <div class="to-from"><span>Subject:</span><input ref="subject" v-model="sentEmail.title" type="text"></div>
    <textarea class="txtarea" v-model.trim="sentEmail.text"></textarea>
    </form>
    </nav>
    <button v-on:click="closeModal" class="close-btn">Close</button>
    <button v-on:click="saveEmail" class="sent-btn">Send</button>
            </section>
            </div>
            `,
    mounted() {
        // console.log('REFS:', this.$refs);
        this.$refs.to.focus();

    },
    data() {
        return {
            isShown: false,
            sentEmail: {
                title: '',
                from: '',
                text: '',
            },
        }
    },
    created() {
        eventBus.$on('reply-email', (emailfrom) => {
            this.sentEmail.from = emailfrom
            console.log('event bus working replay-emil')
            this.isShown = true

        })
    },
    computed: {},
    methods: {
        openModal() {
            console.log('close')
            this.isShown = true
        },
        closeModal() {
            console.log('open')
            this.isShown = false
        },
        saveEmail() {
            let title = this.sentEmail.title
            let from = this.sentEmail.from
            let text = this.sentEmail.text
            emailService.hendleSentEmail(title, from, text)
            this.isShown = false
        },
    },

    components: {

    }
}

{/* <section  class="modal" v-show="isShown"> 
<nav class="modal-nav">
    <h2>New Massage</h2>
<form @submit.prevent="saveEmail">
<div  class="to-from"><span>To:</span><input placeholder="To" ref="to" v-model="sentEmail.from" autofocus  type="text"></div>
<div class="to-from"><span>Subject:</span><input ref="subject" v-model="sentEmail.title" type="text"></div>
<textarea class="txtarea" v-model.trim="sentEmail.text"></textarea>
</form>
</nav>
<button v-on:click="closeModal" class="close-btn">Close</button>
<button v-on:click="saveEmail" class="sent-btn">Send</button>
        </section> */}