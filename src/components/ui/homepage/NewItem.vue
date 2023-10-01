<script setup>
import {ref} from "vue";
import CardItem from './CardItem.vue';
import {onMounted} from "vue";
import axios from "axios";

const products = ref([])

const getData = () => {
  axios.get("https://zullkit-backend.demo.belajarkoding.com/api/products").then((res) => {
    if(res.status == 200) {
      products.value = res.data.data.data
    }
  }).catch((err) => console.log(err))
}
onMounted(() => {
  getData()
});
</script>

<template>
  <CardItem route_name="product" title="New Items" width="lg:w-1/3" :items="products" />
</template>
