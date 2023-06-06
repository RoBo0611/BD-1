import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-regular-svg-icons'

library.add(faUserAstronaut)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')