<template>
  <div>
    <nav>
      <router-link to="/">Home </router-link>
      <router-link to="/login"> Log in </router-link>
      <router-link to="/logout"> Log out</router-link>
      <router-link to="/users"> Show All Users </router-link>
      <router-link to="/user_details"> Search User </router-link>
      <router-link to="/posts/:id"> Single Post</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import Log_out from "./pages/Log_out.vue";
import Users from "./pages/Users.vue";
import User_details from "./pages/User_details.vue";
import SinglePost from "./pages/SinglePost.vue";
import router from "../router";

export default {
  data() {
    return {};
  },
  methods: {
    increment() {
      this.counter++;
    },
  },
  components: {
    Home,
    Login,
    Log_out,
    Users,
    User_details,
    SinglePost,
    router,
  },
};
</script>

<style scoped></style>
