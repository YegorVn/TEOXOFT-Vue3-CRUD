<template>
  <!-- <div>
    <h2>Item List</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item.name + item.surName + item.address + item.exp + item.age }}
        <button @click="editItem(index)">Edit</button>
      </li>
    </ul>
  </div> -->
  <DataTable
    ref="dt"
    :value="items"
    dataKey="id"
    :rows="10"
    :filters="filters"
    class="mt-5">
    <template #header>
      <div
        class="flex flex-wrap gap-2 align-items-center justify-content-between">
        <h4 class="m-0">Список сотрудников</h4>
      </div>
    </template>
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
        { field: "name", header: "Имя" },
        { field: "surname", header: "Фамилия" },
        { field: "age", header: "Возраст" },
        { field: "exp", header: "Опыт" },
        { field: "address", header: "Адрес" },
      ],
    };
  },
  computed: {
    items() {
      return this.$store.getters.getItems;
    },
  },
  methods: {
    editItem(index) {
      this.$router.push({ path: `/edit/${index}` });
    },
  },
};
</script>
