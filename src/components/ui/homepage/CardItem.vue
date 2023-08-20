<script setup>
import Card from "@/components/ui/Card.vue";
import { RouterLink } from "vue-router";
import {computed} from "vue";

defineProps({
  title: String,
  width : String,
  items : Array
});
</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">{{ title }}</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <Card :width="width" v-for="(item,index) in items" :key="index">
          <RouterLink to="#">
            <div class="m-4 overflow-hidden rounded-xl">
              <img
                alt="Placeholder"
                class="block w-full h-auto"
                :src="`src/assets/img/${item.img}`"
              />
            </div>
          </RouterLink>

          <header class="px-4 mb-4 leading-tight">
            <h1 class="text-lg">
              <RouterLink
                class="font-semibold text-black no-underline hover:underline"
                to="#"
              >
                {{ item.title }}
              </RouterLink>
            </h1>
            <span class="block text-sm font-light text-gray-500 no-underline">
              {{ item.count }} {{ title == 'Top Categories' ? 'items' : '' }}
            </span>
          </header>
        </Card>
    </div>
  </div>
</template>
