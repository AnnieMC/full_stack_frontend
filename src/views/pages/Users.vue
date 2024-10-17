<template>
  <div>
    <h1>Users</h1>
    <form @submit.prevent="handleSubmit">
      <em v-if="loading">Loading users</em>
      <ul v-if="users">
        <li v-for="user in users" :key="user.user_id">
          <strong>User ID:</strong> {{ user.user_id }}<br />
          <strong>First Name:</strong> {{ user.first_name }}<br />
          <strong>Last Name:</strong> {{ user.last_name }}<br />
          <br />
          <button>follow</button>
        </li>
      </ul>

      <div v-if="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import { socialService } from "../../services/social.service";

export default {
  data() {
    return {
      error: "",
      loading: true,
    };
  },
  mounted() {
    socialService
      .getsearchUsers()
      .then((users) => {
        this.users = users;
        this.loading = false;
      })
      .catch((error) => (this.error = error));
  },
};
</script>
