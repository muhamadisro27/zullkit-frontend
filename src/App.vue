<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/layouts/Navbar.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Navbar />
    </div>
  </header>

  <RouterView />
</template>
