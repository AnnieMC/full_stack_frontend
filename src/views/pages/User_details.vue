<template>
  <div>
    <h1>Searching an user</h1>
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

      <label for="id"> ID: </label>
      <input type="id" name="id" v-model="id" />
      <div v-show="submitted && !id">Last id is required</div>

      <br />
      <br />

      <button>Search user</button>

      <div v-if="singleuser">
        <h2>User Details</h2>
        <ul>
          <li><strong>First Name:</strong> {{ singleuser.first_name }}</li>
          <li><strong>Last Name:</strong> {{ singleuser.last_name }}</li>
          <li><strong>Username:</strong> {{ singleuser.username }}</li>
          <li>
            <strong>Followers:</strong>
            <ul>
              <li
                v-for="(follower, index) in singleuser.followers"
                :key="index"
              >
                <strong>User ID:</strong> {{ follower.user_id }}<br />
                <strong>First Name:</strong> {{ follower.first_name }}<br />
                <strong>Last Name:</strong> {{ follower.last_name }}<br />
                <strong>Username:</strong> {{ follower.username }}<br />
                <br />
              </li>
            </ul>
          </li>
          <li>
            <strong>Posts:</strong>
            <ul>
              <li v-for="(post, index) in singleuser.totalPost" :key="index">
                {{ post }}
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div v-if="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import { socialService } from "../../services/social.service";

export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      id: "",
      submitted: false,
      singleuser: null,
      error: "",
    };
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true;

      if (!this.first_name || !this.last_name || !this.id) {
        return;
      }

      socialService
        .getSingleUser(this.id)
        .then((singleuser) => {
          if (
            singleuser &&
            singleuser.first_name.toLowerCase() ===
              this.first_name.toLowerCase() &&
            singleuser.last_name.toLowerCase() === this.last_name.toLowerCase()
          ) {
            // The ID matches the first_name and last_name
            this.singleuser = singleuser;
            this.error = "";
          } else {
            // Invalid match
            this.singleuser = null;
            this.error =
              "User not found or ID does not match the provided names.";
          }
        })
        .catch((error) => {
          this.error = "Something went wrong";
        });
    },
  },
};
</script>
