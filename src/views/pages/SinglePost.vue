<template>
  <div>
    <!-- <em v-if="post.loading">Loading post...</em>

    <div v-else>
      <p>Author: {{ post.author.first_name + " " + post.author.last_name }}</p>
      <p>Text: {{ post.text }}</p>
      <p>Date: {{ post.timestamp }}</p>
      <p>Number of likes: {{ post.likes.length }}</p>

      <hr />
      <p>All post info (for debugging during development):</p>
      <p>{{ post }}</p>
    </div>

    <div v-if="error">
      {{ error }}
    </div> -->

    <h1>CHIRRUP Post</h1>
    <h2>New Post</h2>
    <form @submit.prevent="handleSubmit">
      <input type="new_post" name="new_post" v-model="new_post" />
      <div v-show="submitted && !new_post">New Post</div>

      <br />
      <br />
      <button>Post</button>

      <div v-if="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import { postService } from "../../services/posts.service";

export default {
  data() {
    return {
      post: {},
      error: "",
    };
  },
  created() {
    this.post.loading = true;

    postService
      .getSinglePost(this.$route.params.id)
      .then((post) => {
        this.post = post;
      })
      .catch((error) => (this.error = error));
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true;
      const { new_post } = this;

      if (!new_post) {
        return;
      }
    },
  },
};
</script>
