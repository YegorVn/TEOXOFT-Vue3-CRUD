<template>
  <div class="mt-5 flex flex-column w-7 m-auto">
    <h1>Редактирование</h1>

    <form @submit.prevent="saveEdit" class="flex flex-column w-4 m-auto mt-5">
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
      <Button label="Сохранить" type="submit" class="mt-4" />
    </form>
    <Button @click="deleteItem" severity="danger" label="Удалить" type="submit" class="w-3 m-auto mt-3" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      editedItem: { name: "" },
    };
  },
  methods: {
    saveEdit() {
      this.$store.dispatch("updateItem", {
        index: this.$route.params.index,
        item: this.editedItem,
      });
      this.$router.push("/");
    },
    fetchItem() {
      const index = this.$route.params.index;
      this.editedItem = { ...this.$store.getters.getItems[index] };
    },
    deleteItem() {
      const index = this.$route.params.index;
      this.$store.dispatch("removeItem", index);
      this.$router.push("/");
    },
  },
  created() {
    this.fetchItem();
  },
};
</script>
