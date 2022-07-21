import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import PostsManager from '@/components/PostsManager'
import OktaVue, { LoginCallback } from '@okta/okta-vue'
import { OktaAuth } from '@okta/okta-auth-js'

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-92653305.okta.com/oauth2/default',
  clientId: '0oa5v6hp11BYKhZDx5d7',
  redirectUri: window.location.origin + '/callback',
  scopes: ['openid', 'profile', 'email']
})

Vue.use(Router)
Vue.use(OktaVue, { oktaAuth })

// var path = require('path');

// app.route('/*')
//     .get(function(req, res) {
//           res.sendFile(path.join(__dirname + '/dist/index.html'));
// });

// module.exports = app;

console.log("fafafa");

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/callback',
      component: LoginCallback
    },
    {
      path: '/posts-manager',
      name: 'PostsManager',
      component: PostsManager,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

export default router;