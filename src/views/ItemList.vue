<template>
  <!-- Используется компонент DataTable для отображения списка сотрудников -->
  <DataTable
    ref="dt"
    :value="items"
    dataKey="id"
    :rows="10"
    :filters="filters"
    class="mt-5">
    <!-- Шапка таблицы с заголовком "Список сотрудников" -->
    <template #header>
      <div
        class="flex flex-wrap gap-2 align-items-center justify-content-between">
        <h4 class="m-0">Список сотрудников</h4>
      </div>
    </template>
    <!-- Колонки таблицы с соответствующими полями для отображения данных сотрудников -->
    <Column
      field="name"
      header="Имя"
      sortable
      style="min-width: 12rem"></Column>
    <Column
      field="surname"
      header="Фамилия"
      sortable
      style="min-width: 16rem"></Column>
    <Column field="age" header="Возраст" sortable style="min-width: 8rem">
    </Column>
    <Column
      field="exp"
      header="Опыт работы"
      sortable
      style="min-width: 10rem"></Column>
    <Column field="address" header="Адрес" sortable style="min-width: 12rem">
    </Column>
    <!-- Колонка с кнопкой редактирования -->
    <Column :exportable="false" style="min-width: 8rem">
      <template #body="slotProps">
        <Button
          icon="pi pi-pencil"
          outlined
          rounded
          class="mr-2"
          @click="editItem(slotProps.index)" />
      </template>
    </Column>
  </DataTable>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        // Определение колонок таблицы
        { field: "name", header: "Имя" },
        { field: "surname", header: "Фамилия" },
        { field: "age", header: "Возраст" },
        { field: "exp", header: "Опыт" },
        { field: "address", header: "Адрес" },
      ],
    };
  },
  computed: {
    // Получение данных сотрудников из хранилища Vuex
    items() {
      return this.$store.getters.getItems;
    },
  },
  methods: {
    // Метод для перехода к странице редактирования сотрудника
    editItem(index) {
      this.$router.push({ path: `/edit/${index}` });
    },
  },
};
</script>