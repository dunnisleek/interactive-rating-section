const app =Vue.createApp({
    data(){
       return{
        how:'',
        displayThankYou:false
      
       }
    },
    methods:{
       submitForm(){
        console.log('Radio-Button')
         console.log(this.how)
       
       },
      
       displayPage(){
       if(this.how > 0 ){
              this.displayThankYou = !this.displayThankYou
       }
         
       }
      
    },
  
});
app.mount('#app');