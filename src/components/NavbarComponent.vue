<template>
  <Menubar :model="items" />
  <!-- <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Item</router-link>
  </nav> -->
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const items = ref([
  {
    label: "Список сотрудников",
    icon: "pi pi-user",
    command: () => {
      router.push("/");
    },
  },
  {
    label: "Добавить нового сотрудника",
    icon: "pi pi-user-plus",
    command: () => {
      router.push("/add");
    },
  },
]);
</script>
