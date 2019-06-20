import navSide from '../cpms/email/nav-side.cmp.js'

export default {
    name: 'emailApp',

    template: `
    <section class="email-page-comtainer">
        <nav-side> </nav-side>
    <div class="emailApp-contaider">
        <h1>Email App</h1>
</div>
    </section>
    `,
    components: {
        navSide
    }
}