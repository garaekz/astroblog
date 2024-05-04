<script setup>
import { getCurrentInstance, provide } from "vue";
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";
import SidebarBackdrop from "./SidebarBackdrop.vue";
import pinia from "@plugins/pinia";

const props = defineProps({
  user: Object,
});

const app = getCurrentInstance().appContext.app;
app.use(pinia);

provide("user", props.user);
</script>
<template>
  <div>
    <Navbar />
    <Sidebar />
    <SidebarBackdrop />
  </div>
</template>
