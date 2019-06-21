import emailPreview from './email-preview.cmp.js'

export default {
    template: `
    <section>
    <ul class="email-list">
        <email-preview
     
         v-for="(currentEmail) in emails" 
         v-bind:key="currentEmail.id"
          v-bind:email="currentEmail"
          >
         {{emails}}
        </email-preview>
      
    </ul>
</section>
    `,
    props: ['emails'],
    mounted(){
console.log('in the mounted',this.emails)
    },
    data(){
        return{
            
        }
    },
    created(){
console.log('created in the list')
console.log('emails',this.emails)

    },
    computed:{
        click(){
            console.log('click')
        }
    },
    components:{
        emailPreview
    },
    method:{
       
        }
    
}