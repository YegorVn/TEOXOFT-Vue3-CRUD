<template>
  <div class="mt-5 flex flex-column w-7 m-auto">
    <h1>Добавление нового сотрудника</h1>

    <form @submit.prevent="addItem" class="flex flex-column w-4 m-auto mt-5">
      <InputText placeholder="Имя" v-model="name" />
      <InputText placeholder="Фамилия" v-model="surname" class="mt-4"/>
      <InputText placeholder="Возраст" v-model="age" class="mt-4"/>
      <InputText placeholder="Опыт" v-model="exp" class="mt-4"/>
      <InputText placeholder="Адресс" v-model="address" class="mt-4"/>

      <Button label="Добавить сотрудника" type="submit" class="mt-4"/>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      surname: "",
      age: "",
      exp: "",
      address: "",
      
    };
  },
  methods: {
    addItem() {
      this.$store.dispatch("addItem", {
        name: this.name,
        surname: this.surname,
        age: this.age,
        exp: this.exp,
        address: this.address,
      });
      this.$router.push("/");
    },
  },
};
</script>
