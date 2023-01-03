import { createApp } from 'vue'
import App from './App.vue'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faCakeCandles, faGraduationCap, faPhone, faMap, faEnvelope, faComputerMouse, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebook, faInstagram, } from '@fortawesome/free-brands-svg-icons'
library.add(faGithub, faFacebook, faInstagram, faUser, faCakeCandles, faGraduationCap, faPhone, faMap, faEnvelope, faComputerMouse, faCaretDown )


createApp(App)
.use(bootstrap)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
