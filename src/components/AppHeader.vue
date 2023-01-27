<script >

export default{
  data() {
    return {
      
    }
  
  },
  methods: {
    notReadyYet(){
      alert('Siamo spiacenti , ma questa parte non è ancora stata ultimata')
    }
  },
}


</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top" id="Nav_Bar">
    <div class="container-fluid">
    <div id="lg_center">  <a class="navbar-brand" id="lg_center" href="#"><img id="lg_img" src="../assets/AP_LWHITE.png" alt=""></a></div>
      <button class="navbar-toggler" id="Tg_color" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" id="Tg_color" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg></span>
      </button>
      <div class="collapse navbar-collapse  " id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item dropdown " >
            <a class="nav-link dropdown-toggle"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Chi Siamo
            </a>
            <ul class="dropdown-menu " id="drp_Mn">
              <li><a class="dropdown-item" href="#Storia">La Nostra Storia </a></li>
              <li><a class="dropdown-item" href="#Amministratori">Gli Amministratori</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#Partner">I Nostri Partner</a></li>
            </ul>
          </li>
          <li>
            <button id="Btn_Jumbo" > <a class="link_btn" href="#Preventivo">Richiedi il tuo preventivo</a></button>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Contatti">Contatti</a>
          </li>
        </ul>
        
            <a href="#" id="reserved_link" @click="notReadyYet">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
              Area Riservata
            </a>
         
      </div>
    </div>
  </nav>
 
</template>

<style lang="scss" scoped>
  #Nav_Bar{
    background-color: #333333;
    a{
      color: lightgray;
      transition: all 1s;

    }
    a:hover{
      cursor: pointer;
      color: white;
    }
  }
  #drp_Mn{
    background-color:  #333333;
  }
  
  #lg_img{
  max-width: 50px;
  }
  #Tg_color{
    color: white;
  }
  .dropdown-item:hover{
      background-color:transparent;
      color: white;
  }
  #Btn_Jumbo{
   
    background-color: #333;
   border:none;
    border-radius: 5px;
    color: lightgray;
    padding: 8px 0px;
    vertical-align: -moz-middle-with-baseline;
    transition: ease-in 0.5s;
    &:hover{
      color: white;
    
    }
}
.link_btn{
  text-decoration: none;
}
#reserved_link{
  text-decoration: none;
  list-style: none;
  transition: ease-in 0.5s;
  &:hover{
    color: white;
  }
 
}
a{
  margin:0px 5px;
}

 
</style>
