import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/pages/Home.vue";
import Login from "../views/pages/Login.vue";
import Log_out from "../views/pages/Log_out.vue";
import NotFound from "../views/pages/NotFound.vue";
import Users from "../views/pages/Users.vue";
import User_details from "../views/pages/User_details.vue";
import SinglePost from "../views/pages/SinglePost.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/logout", component: Log_out },
  { path: "/users", component: Users },
  { path: "/user_details", component: User_details },
  { path: "/:pathMatch(.*)*", component: NotFound },
  { path: "/posts/:id", component: SinglePost },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
