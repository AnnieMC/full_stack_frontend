<template>
  <div>
    <h1>User Login</h1>
    <form @submit.prevent="handleSubmit">
      <!--this line calls the functions when the form is submitted-->
      <label for="username"> username: </label>
      <input type="username" name="username" v-model="username" />
      <div v-show="submitted && !username">username is required</div>

      <br />
      <br />

      <label for="password"> Password: </label>
      <input type="password" name="password" v-model="password" />
      <div v-show="submitted && !password">Password is required</div>

      <br />
      <br />

      <button>Log in</button>

      <div v-if="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import { userService } from "../../services/users.service";

export default {
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
      error: "",
    };
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true;

      const { username, password } = this;

      // if (!(username && password)) {
      //   return;
      // }
      // // if (!usernameValidator.validate(username)) {
      // //   this.error = "username must be a valid username.";
      // //   return;
      // // }

      const password_pattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&]).{8,30}$/;
      if (!password_pattern.test(password)) {
        this.error = "Password not strong enough.";
        return;
      }

      userService
        .postLogin(username, password)

        .catch((error) => (this.error = error));
    },
  },
};
</script>
