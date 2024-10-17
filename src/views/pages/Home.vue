<template>
  <div>
    <h1>Welcome to Chirrup</h1>
    <form @submit.prevent="handleSubmit">
      <!--this line calls the functions when the form is submitted-->
      <label for="first name"> First Name: </label>
      <input type="first name" name="first name" v-model="first_name" />
      <div v-show="submitted && !first_name">First Name is required</div>

      <br />
      <br />

      <label for="last name"> Last Name: </label>
      <input type="last name" name="last name" v-model="last_name" />
      <div v-show="submitted && !last_name">Last Name is required</div>

      <br />
      <br />

      <label for="username"> Username: </label>
      <input type="usernameil" name="username" v-model="username" />
      <div v-show="submitted && !username">username is required</div>

      <br />
      <br />

      <label for="password"> Password: </label>
      <input type="password" name="password" v-model="password" />
      <div v-show="submitted && !password">Password is required</div>

      <br />
      <br />
      <button>Sing up</button>

      <div v-if="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import { userService } from "../../services/users.service";

export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      submitted: false,
      error: "",
      loading: true,
    };
  },

  methods: {
    handleSubmit(e) {
      this.submitted = true;
      const { first_name, last_name, username, password } = this;

      if (!(first_name && last_name && username && password)) {
        return;
      }

      // if (!usernameValidator.validate(username)) {
      //   this.error = "username must be a valid username.";
      //   return;
      // }

      const password_pattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&]).{8,30}$/;
      if (!password_pattern.test(password)) {
        this.error = "Password not strong enough.";
        return;
      }

      userService
        .postCreateUser(first_name, last_name, username, password)
        .then(async (response) => {
          console.log(response);
          if (response.status == 201) {
            alert("Account created successfully!");
          } else {
            const errorData = await response.json();
            if (
              errorData &&
              errorData.error_message === "The username is already taken"
            )
              this.error = "Username is already taken";
          }
        })
        .catch((error) => {
          this.error = error.message || "An error occurred";
        });
    },
  },
};
</script>
