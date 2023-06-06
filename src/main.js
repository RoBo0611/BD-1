import { createApp } from 'vue'
import App from './App.vue'

import { libary } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

libary.add(faUser)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')