<template>
  <div>
    <h1>CHIRRUP</h1>
    <h2>Log out</h2>
    <form @submit.prevent="handleSubmit">
      <button>Log out</button>

      <div v-if="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import { userService } from "../../services/users.service";

export default {
  data() {
    return {
      submitted: false,
      error: "",
    };
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true;
      const username = "annie1";
      userService
        .postLogin()

        .catch((error) => (this.error = error));
    },
  },
};
</script>
