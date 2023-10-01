<script setup>
import axios from "axios";
import { reactive } from "vue";
import { RouterLink } from "vue-router";

const form = reactive({
  email: "",
  password: "",
});

const submit = async () => {
  try {
    await axios
      .post("https://zullkit-backend.demo.belajarkoding.com/api/login", {
        email: form.email,
        password: form.password,
      })
      .then((res) => {
        localStorage.setItem('access_token', res.data.data.access_token);
        localStorage.setItem('token_type', res.data.data.token_type);
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (error) {
    console.error("error" + error.message);
  }
};
</script>

<template>
  <form>
    <div class="mb-4">
      <label class="block mb-1" for="email">Email Address</label>
      <input
        placeholder="Type your email"
        id="email"
        type="text"
        autofocus
        name="email"
        v-model="form.email"
        class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
      />
    </div>
    <div class="mb-4">
      <label class="block mb-1" for="password">Password</label>
      <input
        placeholder="Type your password"
        id="password"
        type="password"
        @keyup.enter="submit"
        name="password"
        v-model="form.password"
        class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
      />
    </div>
    <div class="mt-6">
      <button
        @click.prevent="submit"
        type="submit"
        class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-lg md:px-10 hover:shadow"
      >
        Sign In
      </button>
      <RouterLink
        to="/register"
        class="inline-flex items-center justify-center w-full px-8 py-3 mt-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-lg md:px-10 hover:shadow"
      >
        Create New Account
      </RouterLink>
    </div>
  </form>
</template>
