<script>

</script>

<template>
    <div class="video_container " >
            <video class="video_bg"  src="../assets/Video_bg.mp4"  autoplay loop muted  ></video>
            <div class="logo_container" >
                <img   src="../assets/ap-logo-white.svg.svg" alt="">
               
            </div>
    </div>
</template>

<style lang="scss">
    .video_bg{
       
        width: 100%;
        filter: grayscale(75%);
       

        opacity: 0.5;
    }
    .video_container{
      
        position: relative;
      
       
    }
    .logo_container{
        
            position: absolute;
            bottom: 36%;
            left: 38%;
           
        img{
            width: 40%;
        }
        
    }

    @media (max-width: 992px) and (min-width: 350px) { 

        .logo_container {
          
            bottom: 26%;
           
          }
        }
</style>