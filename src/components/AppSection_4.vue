<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        email: '',
        subject: '',
        message: '',
        _replyto: 'yarisliberos.yn@gmail.com' 
      },
    }
  },
  methods: {
    async submitForm() {
      try {
        await axios.post('https://formspree.io/f/xyyazrzn', this.form)
        alert('Grazie per averci scelto, vi invieremo al più presto la nostra risposta ')
        this.form = {
            subject: '',
            email: '',
            message: '',
            _replyto:'yarisliberos.yn@gmail.com'
        } 
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<template>
  <section id="Preventivo" class="disp_flex py-3" >
    <div  data-aos="flip-up"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1200">
      <h1>
       Richiedi il tuo preventivo
      </h1>
    </div>
    <form @submit.prevent="submitForm">

      <div  data-aos="flip-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1200">
        <label for="exampleFormControlInput1" class="form-label py-2"><h4>Indirizzo Email</h4></label>
        <input type="email" v-model="form.email" class="form_control bg-transparent border-0 border-bottom rounded-0 " id=" No_Out_Email" placeholder="Inserisci la tue email">
      </div>
      <div  data-aos="flip-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1200">
        <label for="exampleFormControlInput1" class="form-label py-2"><h4>Oggetto</h4></label>
        <input type="text" class="form_control bg-transparent border-0 border-bottom rounded-0 " v-model="form.subject" placeholder="Oggetto">
      </div>
      <div  data-aos="flip-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1200" >
        <label for="exampleFormControlTextarea1" class="form-label   py-2"><h4>Le tue richieste</h4></label>
        <textarea v-model="form.message" class="form_control bg-transparent border-0 border-bottom rounded-0 " id=" No_Out" rows="3" placeholder="Scrivici le tue richieste"></textarea>
      </div>
      <div  data-aos="flip-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1200">
        <input type="submit" id="Btn_Sub" value="Invia" class="p-2 my-2 border-0">
        <input type="hidden" name="_replyto"  value="yarisliberos.yn@gmail.com"/>
      </div>
    </form>
  </section>
</template>

<style lang="scss">
h1{
  color:white;
  padding-bottom: 20px;
}
    .card_bg{
        background-color: #333;
    }
    .card_text{
       
        text-align: center;
    }
    .Circle_round{
        border-radius: 25px;
        border: 1px solid white;
        
    }
    .title_color{
        color: white;
    }
    .disp_flex{
      display: flex;
      flex-direction: column;
      align-content: center;
      width: 35%;
      text-align: center;
      margin: auto;
    }
    label{
      color:white
    }
    .form_control{
      display: block;
      width: 100%;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      background-clip: padding-box;
      outline: none;
      color: lightgray;
      border-bottom: lightgray;
      
     
      
    }
    #Btn_Sub{
      color: lightgray;
      border-color: lightgray;
      transition: all 1s;
      background-color: transparent;
      &:hover{
        color: #333;
        background-color: white;
        font-weight: bold;
      }
    }
    @media (max-width: 992px) and (min-width: 350px) { 

      .disp_flex{
        width: 80%;
      }
      }
 
</style>