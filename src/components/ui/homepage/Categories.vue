<script setup>
import {ref} from 'vue';
import CardItem from './CardItem.vue';
import {onMounted} from "vue";
import axios from "axios";

const categories = ref([])

const getData = () => {
  axios.get("https://zullkit-backend.demo.belajarkoding.com/api/categories").then((res) => {
    if(res.status == 200) {
      categories.value = res.data.data.data
    }
  }).catch((err) => console.log(err))
}

onMounted(() => {
  getData()
});
</script>

<template>
  <CardItem route_name="categories_id" title="Top Categories" width="lg:w-1/4" :items="categories" id="categories" />
</template>
