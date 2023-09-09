<script setup>
import {ref} from 'vue';
import CardItem from './CardItem.vue';

const items = ref([
  {
    id : 1,
    img: 'categories-1.jpg',
    title : 'Mobile UI Kit',
    count : 731,
    link : '#'
  },
  {
    id : 2,
    img: 'categories-2.jpg',
    title : 'Fonts',
    count : 657,
    link : '#'
  },
  {
    id : 3,
    img: 'categories-3.jpg',
    title : 'Icon Set',
    count : 83559,
    link : '#'
  },
  {
    id : 4,
    img: 'categories-4.jpg',
    title : 'Website UI Kit',
    count : 4500,
    link : '#'
  },
])

</script>

<template>
  <CardItem title="Top Categories" width="lg:w-1/4" :items="items" id="categories" />
</template>
