import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import essentialMixin from './mixins/essentialsMixin';

createApp(App).mixin(essentialMixin).use(router).use(store).mount('#app')
