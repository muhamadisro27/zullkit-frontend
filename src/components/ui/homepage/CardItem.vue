<script setup>
import Card from "@/components/ui/Card.vue";
import { RouterLink } from "vue-router";

defineProps({
  title: String,
  url : String,
  width: String,
  items: Array,
});
</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">{{ title }}</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <Card :width="width" v-for="(item, index) in items" :key="index">
        <RouterLink :to="`/${url}/${item.id}`">
          <div class="m-4 overflow-hidden rounded-xl">
            <img
              :alt="item.name"
              class="block w-full h-auto"
              :src="item.thumbnails"
            />
          </div>

          <header class="px-4 mb-4 leading-tight">
            <h1 class="text-lg">
              {{ item.name }}
            </h1>
            <span class="block text-sm font-light text-gray-500 no-underline">
              {{ title == "Top Categories" ? item.products_count : "" }} {{ title == "Top Categories" ? "items" : "" }}
            </span>
          </header>
        </RouterLink>
      </Card>
    </div>
  </div>
</template>
