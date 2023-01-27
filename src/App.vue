<script >
import AppHeader from './components/AppHeader.vue'
import jumbotron from './components/jumbotron.vue'
import AppSection from './components/AppSection.vue'
import AppSection_2 from './components/AppSection_2.vue'
import AppSection_3 from './components/AppSection_3.vue'
import AppSection_4 from './components/AppSection_4.vue'
import AppFooter from './components/AppFooter.vue'
import axios from 'axios'




export default{

  data() {
    return {
      isLoaded: false
    }
  },
  mounted() {
    
    setTimeout(() => {
      this.isLoaded = true
    }, 4000);
  },
  components:{
  AppHeader,
  jumbotron,
  AppSection,
  AppSection_2,
  AppSection_3,
  AppSection_4,
  AppFooter
 
 
  }
  
  
    
}
</script>

<template>

 <div>
  <div class="text-center" v-if="!isLoaded">
   <div class="Flex_Load">
    <div class="pos_img">
      <img class="img_loading" src="./assets/AP_LWHITE.png" alt="">
    </div>
    <img src="./assets/Dual Ring-1s-200px.svg" alt="">
   </div>
  </div >
 <div v-else>
  <AppHeader />
  <jumbotron/>
  <AppSection/>
  <AppSection_2/>
  <AppSection_3/>
  <AppSection_4/>
  <AppFooter/>
 </div>
 </div>
</template>

<style  scoped>
  h1{
    color: white;
  }
  .Flex_Load{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction:column ;
    align-items: center;
    justify-content: center;
    position: relative
  }
  .img_loading{
    max-width: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

  }
 

</style>
