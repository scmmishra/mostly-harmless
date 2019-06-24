import Vue from 'vue';
import Router from 'vue-router';
import Messages from '@/views/Messages';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/message',
      name: 'messages-home',
      component: Messages
    },
    {
      path: '/message/:id',
      name: 'message',
      component: Messages,
      props: true
    }
  ]
});

export default router;
