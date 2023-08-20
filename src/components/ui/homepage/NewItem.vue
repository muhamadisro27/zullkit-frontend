<script setup>
import {ref} from "vue";
import CardItem from './CardItem.vue';

const items = ref([
  {
    img: 'items-1.jpg',
    title : 'Mobile UI Kit',
    count : 'Mobile UI Kit',
    link : '#'
  },
  {
    img: 'items-2.jpg',
    title : 'Online Doctor Consultation',
    count : 'Website UI Kit',
    link : '#'
  },
  {
    img: 'items-3.jpg',
    title : 'Banking Crypto',
    count : 'Mobile UI Kit',
    link : '#'
  }
])
</script>

<template>
  <CardItem title="New Items" width="lg:w-1/3" :items="items" />
</template>
