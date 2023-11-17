<template>
  <!-- Форма редактирования сотрудника -->
  <div class="mt-5 flex flex-column w-7 m-auto">
    <h1>Редактирование</h1>

    <!-- Форма с полями для редактирования данных сотрудника -->
    <form @submit.prevent="saveEdit" class="flex flex-column w-4 m-auto mt-5">
      <!-- Поля ввода данных для редактирования -->
      <InputText placeholder="Имя" v-model="editedItem.name" ir />
      <InputText
        placeholder="Фамилия"
        v-model="editedItem.surname"
        class="mt-4" />
      <InputText placeholder="Возраст" v-model="editedItem.age" class="mt-4" />
      <InputText placeholder="Опыт" v-model="editedItem.exp" class="mt-4" />
      <InputText
        placeholder="Адресс"
        v-model="editedItem.address"
        class="mt-4" />
      
      <!-- Кнопка для сохранения отредактированных данных -->
      <Button label="Сохранить" type="submit" class="mt-4" />
    </form>
    
    <!-- Кнопка для удаления сотрудника -->
    <Button @click="deleteItem" severity="danger" label="Удалить" type="submit" class="w-3 m-auto mt-3" />
  </div>
</template>

<script>
export default {
  data() {
    // Инициализация данных для редактирования
    return {
      editedItem: { name: "" },
    };
  },
  methods: {
    // Метод для сохранения отредактированных данных
    saveEdit() {
      this.$store.dispatch("updateItem", {
        index: this.$route.params.index,
        item: this.editedItem,
      });
      // Перенаправление на главную страницу после сохранения
      this.$router.push("/");
    },
    
    // Метод для получения данных сотрудника для редактирования
    fetchItem() {
      const index = this.$route.params.index;
      this.editedItem = { ...this.$store.getters.getItems[index] };
    },
    
    // Метод для удаления сотрудника
    deleteItem() {
      const index = this.$route.params.index;
      this.$store.dispatch("removeItem", index);
      // Перенаправление на главную страницу после удаления
      this.$router.push("/");
    },
  },
  
  // Хук created, вызывается после создания экземпляра компонента
  created() {
    // Вызов метода для получения данных сотрудника перед отображением компонента
    this.fetchItem();
  },
};
</script>