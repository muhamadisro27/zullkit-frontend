<script setup>
import { reactive } from "vue";
import axios from "axios";
import { useUserStore } from "@/stores/user";
import { RouterLink, useRouter } from "vue-router";

const form = reactive({
  name: "",
  email: "",
  password: "",
  title: "Designer",
});

const router = useRouter();
const userStore = useUserStore();

const submit = async () => {
  try {
    await axios
      .post("https://zullkit-backend.demo.belajarkoding.com/api/register", {
        name: form.name,
        email: form.email,
        password: form.password,
        title: form.title,
      })
      .then((res) => {
        if (res.data.meta.code == 200) {
          localStorage.setItem("access_token", res.data.data.access_token);
          localStorage.setItem("token_type", res.data.data.token_type);

          userStore.fetchUser();
          router.push("/")
        }
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
      <label class="block mb-1" for="name">Name</label>
      <input
        placeholder="Type your full name"
        type="text"
        v-model="form.name"
        class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
      />
    </div>
    <div class="mb-4">
      <label class="block mb-1" for="email">Email Address</label>
      <input
        placeholder="Type your email"
        type="text"
        v-model="form.email"
        class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
      />
    </div>
    <div class="mb-4">
      <label class="block mb-1" for="password">Password</label>
      <input
        placeholder="Type your password"
        v-model="form.password"
        @keyup.enter="submit"
        type="password"
        class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
      />
    </div>
    <div class="mt-6">
      <button
        @click.prevent="submit"
        type="button"
        class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-lg md:px-10 hover:shadow"
      >
        Continue Sign Up
      </button>
      <RouterLink
        to="/login"
        class="inline-flex items-center justify-center w-full px-8 py-3 mt-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-lg md:px-10 hover:shadow"
      >
        Sign In
      </RouterLink>
    </div>
  </form>
</template>
