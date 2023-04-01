import Vue from 'vue';
import Router from 'vue-router';
import AboutPage from './routes/AboutPage';
import HomePage from './routes/HomePage';
import TodoList from './routes/TodoList';
import AddTodos from './routes/AddTodos';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/list', component: TodoList },
    { path: '/add', component: AddTodos }
  ]
});
