import { ref } from "vue";
import { defineStore } from "pinia";

export const useDrawerStore = defineStore("drawer", () => {
  const isDrawerOpen = ref(false);
  const isUserMenuOpen = ref(false);

  const toggleDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value;

    isDrawerOpen.value
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  };

  const toggleUserMenu = () => {
    isUserMenuOpen.value = !isUserMenuOpen.value;
  };

  return { isDrawerOpen, toggleDrawer, isUserMenuOpen, toggleUserMenu };
});
