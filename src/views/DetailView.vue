<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import axios from "axios";
import icon_check from "@/assets/img/icon-check.png";
import { useRoute } from "vue-router";

const product = ref([]);
const features = ref([])

const galleries = ref([]);

const router = useRoute();

const getData = async () => {
  await axios
    .get(
      "https://zullkit-backend.demo.belajarkoding.com/api/products?id=" +
        router.params.id
    )
    .then((res) => {
      if (res.status == 200) {
        product.value = res.data.data;
        features.value = product.value.features.split(",")
        galleries.value = res.data.data.galleries
      }
    })
    .catch((err) => console.log(err));
};

onMounted(() => {
  getData();
});

const active = ref(0);

const setActive = (index) => {
  return (active.value = index);
};
</script>

<template>
  <main>
    <div class="container p-2 mx-auto my-10 max-w-7xl">
      <div class="flex flex-row flex-wrap py-4">
        <main role="main" class="w-full px-4 pt-1 sm:w-2/3 md:w-2/3">
          <h1
            class="mb-2 text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-4xl"
          >
            {{ product.name }}
          </h1>
          <p class="text-gray-500">{{ product.subtitle }}</p>
          <section id="gallery">
            <template v-if="galleries.length > 0">
              <template v-for="(gallery, index) in galleries">
                <img
                  :src="gallery.url"
                  alt=""
                  class="w-full mt-6 rounded-2xl"
                  v-if="active == index"
                />
              </template>
            </template>
            <template v-else>
              <img
                :src="product.thumbnails"
                alt=""
                class="w-full mt-6 rounded-2xl"
              />
            </template>
            <div class="grid grid-cols-4 gap-4 mt-4">
              <template
                v-for="(gallery, index) in galleries"
                :key="index"
              >
                <div
                  @mouseover="setActive(index)"
                  class="overflow-hidden cursor-pointer rounded-2xl"
                  :class="index == active ? 'ring-2 ring-indigo-500' : ''"
                >
                  <img :src="gallery.url" class="w-full" alt="" />
                </div>
              </template>
            </div>
          </section>
          <section class="" id="orders">
            <h1 class="mb-3 text-lg font-semibold" :class="{ 'mt-8': product }">
              About
            </h1>
            <div class="text-gray-500">
              <p class="pb-4">
                {{ product.description }}
              </p>
              <!-- <p class="pb-4">
                {{ product.features }}
              </p> -->
            </div>
          </section>
        </main>
        <aside class="w-full px-4 sm:w-1/3 md:w-1/3">
          <div class="sticky top-0 w-full pt-4 md:mt-24">
            <div class="p-6 border rounded-2xl">
              <div class="mb-4" v-if="product.is_figma >= 1">
                <div class="flex mb-2">
                  <div>
                    <img
                      src="@/assets/img/icon-figma.png"
                      alt="figma icon"
                      class="w-16"
                    />
                  </div>
                  <div class="block mt-1 ml-4">
                    <h3 class="font-semibold text-md">Figma</h3>
                    <p class="text-gray-400 text-md">Project Included</p>
                  </div>
                </div>
              </div>
              <div class="mb-4" v-if="product.is_sketch >= 1">
                <div class="flex mb-2">
                  <div>
                    <img
                      src="@/assets/img/icon-sketch.png"
                      alt="sketch icon"
                      class="w-16"
                    />
                  </div>
                  <div class="block mt-1 ml-4">
                    <h3 class="font-semibold text-md">Sketch</h3>
                    <p class="text-gray-400 text-md">Project Included</p>
                  </div>
                </div>
              </div>
              <div>
                <h1 class="mt-5 mb-3 font-semibold text-md">Great Features</h1>
                <ul class="mb-6 text-gray-500">
                  <li class="mb-2" v-for="(feature) in features">
                    {{ feature }}
                    <img
                      :src="icon_check"
                      class="float-right w-5 mt-1"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
              <RouterLink
                to="/pricing"
                class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow"
              >
                Download Now
              </RouterLink>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </main>
</template>
