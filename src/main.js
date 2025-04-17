import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import StarRating from 'vue3-star-ratings'

const app = createApp(App)

// Регистрация компонента звездного рейтинга
app.component('star-rating', StarRating)

// Подключение плагинов
app.use(createPinia())
app.use(router)

// Монтирование приложения
app.mount('#app')