<script setup>
import { useDrawerStore } from "@stores/drawer";
import { storeToRefs } from "pinia";

const store = useDrawerStore();
const { isDrawerOpen } = storeToRefs(store);
const { toggleDrawer } = store;
</script>
<template>
  <div
    v-if="isDrawerOpen"
    @click="toggleDrawer"
    class="h-screen w-full absolute bg-black/30 overflow-hidden"
  ></div>
</template>
