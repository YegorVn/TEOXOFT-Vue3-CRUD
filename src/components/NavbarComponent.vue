<template>
  <Menubar :model="items" />
</template>

<script setup>
// Импорт необходимых хуков и функций из Vue
import { ref } from "vue";
import { useRouter } from "vue-router";

// Получение объекта для управления маршрутизацией
const router = useRouter();

// Инициализация реактивной ссылки на массив элементов меню
const items = ref([
  {
    label: "Список сотрудников",
    icon: "pi pi-user",
    // Обработчик события для перехода на главную страницу
    command: () => {
      router.push("/");
    },
  },
  {
    label: "Добавить нового сотрудника",
    icon: "pi pi-user-plus",
    // Обработчик события для перехода на страницу добавления сотрудника
    command: () => {
      router.push("/add");
    },
  },
]);
</script>