<script setup>
import {ref} from 'vue';
import CardItem from './CardItem.vue';

const items = ref([
  {
    img: 'categories-1.jpg',
    title : 'Mobile UI Kit',
    count : 731,
    link : '#'
  },
  {
    img: 'categories-2.jpg',
    title : 'Fonts',
    count : 657,
    link : '#'
  },
  {
    img: 'categories-3.jpg',
    title : 'Icon Set',
    count : 83559,
    link : '#'
  },
  {
    img: 'categories-4.jpg',
    title : 'Website UI Kit',
    count : 4500,
    link : '#'
  },
])

</script>

<template>
  <CardItem title="Top Categories" width="lg:w-1/4" :items="items" />
</template>
