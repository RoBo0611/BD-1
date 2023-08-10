import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faApple, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faUserAstronaut, faYoutube, faApple, faGithub)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')