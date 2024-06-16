import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { store, key } from './store';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 导入mock数据
import initMock from './mock/index';
// 初始化mock数据函数方法
initMock()


const app = createApp(App)
app.use(store, key)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
