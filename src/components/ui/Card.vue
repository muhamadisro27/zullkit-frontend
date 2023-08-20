<script setup>
  defineProps({
    width : String
  })
</script>

<template>
  <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4" :class="width">
    <div class="overflow-hidden border border-gray-200 rounded-xl">
      <slot />
    </div>
  </div>
</template>
