<template>
  <!-- Обработка события submit формы -->
  <form
    @submit.prevent="addItem"
    class="flex flex-column w-100 md:w-6 lg:w-4 m-auto mt-5">
    <h1>Добавление нового сотрудника</h1>
    <InputText placeholder="Имя" v-model="name" @input="validateName" />
    <span v-if="nameError" class="text-red-500">{{ nameError }}</span>

    <InputText
      placeholder="Фамилия"
      v-model="surname"
      @input="validateSurname"
      class="mt-4" />
    <span v-if="surnameError" class="text-red-500">{{ surnameError }}</span>

    <InputText
      placeholder="Возраст"
      v-model="age"
      @input="validateAge"
      class="mt-4" />
    <p v-if="age !== ''">{{ formatYears(age) }}</p>
    <span v-if="ageError" class="text-red-500">{{ ageError }}</span>

    <InputText
      placeholder="Опыт"
      v-model="exp"
      @input="validateExp"
      class="mt-4" />
    <p v-if="exp !== ''">{{ formatYears(exp) }}</p>
    <span v-if="expError" class="text-red-500">{{ expError }}</span>

    <InputText
      placeholder="Адрес"
      v-model="address"
      @input="validateAddress"
      class="mt-4" />
    <span v-if="addressError" class="text-red-500">{{ addressError }}</span>

    <!-- Кнопка для добавления нового сотрудника -->
    <Button label="Добавить сотрудника" type="submit" class="mt-4" />
  </form>
  <ToastComponent />
</template>

<script>
export default {
  data() {
    // Инициализация данных формы
    return {
      name: "",
      surname: "",
      age: "",
      exp: "",
      address: "",
      nameError: "",
      surnameError: "",
      ageError: "",
      expError: "",
      addressError: "",
    };
  },

  methods: {
    addItem() {
      // Проверки на валидность данных
      if (
        !this.name ||
        !this.surname ||
        !this.age ||
        !this.exp ||
        !this.address
      ) {
        alert("все поля должны быть заполнены")
        return;
      }

      if (
        this.nameError ||
        this.surnameError ||
        this.ageError ||
        this.expError ||
        this.addressError
      ) {
        alert("форма содержит ошибки")
        return;
      }

      // Метод для добавления нового сотрудника
      // Вызов действия Vuex для добавления сотрудника в хранилище
      this.$store.dispatch("addItem", {
        name: this.name,
        surname: this.surname,
        age: this.age,
        exp: this.exp,
        address: this.address,
      });
      // Перенаправление на главную страницу после добавления
      this.$router.push("/");
    },
    validateName() {
      // Проверка, что введен только буквы
      if (!/^[a-zA-Zа-яА-Я]+$/.test(this.name)) {
        this.nameError = "Только буквы разрешены";
      } else {
        this.nameError = "";
      }
    },
    validateSurname() {
      if (!/^[a-zA-Zа-яА-Я]+$/.test(this.surname)) {
        this.surnameError = "Только буквы разрешены";
      } else {
        this.surnameError = "";
      }
    },
    validateAge() {
      // Проверка, что введены только цифры
      if (!/^\d+$/.test(this.age)) {
        this.ageError = "Только цифры разрешены";
      } else if (this.age > 100) {
        this.ageError = "Возраст слишком большой";
      } else if (this.age < 14) {
        this.ageError = "Возраст слишком маленький";
      } else {
        this.ageError = "";
      }
    },
    validateExp() {
      if (!/^\d+$/.test(this.exp)) {
        this.expError = "Только цифры разрешены";
      } else if (this.exp > 82) {
        this.expError = "Опыт слишком большой";
      } else {
        this.expError = "";
      }
    },
    validateAddress() {
      if (!/^[a-zA-Zа-яА-Я]+$/.test(this.surname)) {
        this.addressError = "Некорректный адрес";
      } else {
        this.addressError = "";
      }
    },
    formatYears(age) {
      // Форматирование вида: "количество лет" + "год/года/лет"
      let txt;
      let count = age % 100;
      if (count >= 5 && count <= 20) {
        txt = "лет";
      } else {
        count = count % 10;
        if (count == 1) {
          txt = "год";
        } else if (count >= 2 && count <= 4) {
          txt = "года";
        } else {
          txt = "лет";
        }
      }
      return age + " " + txt;
    },
  },
};
</script>
