import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from '@/plugins/axiosInstance.js'

// prototype.$ajax=axios

const app = createApp(App).use(router);
app.mount('#app'); 
app.config.globalProperties.$axios=axios; 