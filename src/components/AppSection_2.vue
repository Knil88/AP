<script>

</script>

<template>
    <section id="Amministratori">
        <div class="container-fluid  row justify-content-center py-5 col-11 m-auto " id="Wrapper_Container">
            <div  data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000" class="col-5  mx-1 " id="txt_cont">
            <h2>Titolo</h2>
            <p class="txt_p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, illo, quae autem fuga modi veniam nam quod saepe suscipit ad excepturi. Suscipit accusantium eos nihil rem quibusdam ex, voluptatum quidem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore at iste necessitatibus eligendi obcaecati, nulla est saepe ad! Aliquid architecto eos neque aperiam maiores non quis rem pariatur amet quo.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ipsam accusantium esse quaerat odio eos consectetur perspiciatis, sint quis molestias voluptatem rem non saepe voluptatibus ex necessitatibus, ea incidunt voluptas.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eius at nisi consequuntur atque commodi alias facere veritatis tempora delectus dolore praesentium saepe aliquam assumenda molestias, temporibus maiores asperiores inventore?
            </p>
        </div>
        <div id="cont_img" data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1000" class="col-5 rounded mx-1" >
            <img  id="img_cont" src="../assets/AP_LOGO_BLACK.svg" alt="">
        </div>
       </div>
      </section>
</template>

<style lang="scss">
   #img_cont{
    width: 100%;
    border-radius: 15px;
   }
   #txt_cont{
    
    color: white;
   }
   h2{
    text-align: center;
   }
   .txt_p{
    font-size: 15px;
   }
   @media (max-width: 992px) and (min-width: 350px) { 

    #Wrapper_Container{
        display: flex;
        flex-direction: column;
        align-content: center;
        }
       #cont_img,#txt_cont{
        width: 100%;
        color: white;
       } 
    }
</style>