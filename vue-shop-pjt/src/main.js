import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'

createApp(App).mixin(mixins).use(store).use(router).mount('#app')

window.Kakao.init('81544fdccd6b0d1ee3f7d6ac43f1cace')
