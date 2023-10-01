<script setup>
import { ref } from "vue";
import CardItem from "@/components/ui/homepage/CardItem.vue";
import { onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const category = ref("");
const items = ref([]);
const route = useRoute();

const getData = () => {
  axios
    .get(
      `https://zullkit-backend.demo.belajarkoding.com/api/categories?id=${route.params.id}&show_products=1`
    )
    .then((res) => {
      if (res.status == 200) {
        items.value = res.data.data.products;
        category.value = res.data.data;
      }
    })
    .catch((err) => console.log(err));
};
onMounted(() => {
  getData();
});
</script>

<template>
  <CardItem
    route_name="product"
    :title="category.name"
    width="lg:w-1/3"
    :items="items"
  />
</template>
