<script setup>
import Logo from "@/components/ui/Logo.vue";
import NavLink from "@/components/ui/NavLink.vue";
import Auth from "@/components/ui/Login.vue";
import UserInfo from "@/components/ui/UserInfo.vue";
import { useUserStore } from "@/stores/user";
import { computed, onMounted } from "vue";


const userStore = useUserStore();

const isLoggedIn = computed(() => userStore.isLoggedIn);
const user = computed(() => userStore.user);

onMounted(() => {
  userStore.fetchUser();
})

</script>

<template>
  <nav
    class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"
  >
    <div
      class="container flex flex-wrap items-center justify-between mx-auto my-2"
    >
      <Logo />
      <UserInfo v-if="isLoggedIn" :user="user.data" />
      <Auth v-else />
      <NavLink />
    </div>
  </nav>
</template>
