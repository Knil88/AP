import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css' 
import  bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import axios from 'axios';



/* import specific icons */
import { faBars } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBars)
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();
createApp(App).use(bootstrap).mount('#app')
