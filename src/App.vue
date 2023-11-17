<template>
  <div id="app">
    <NavbarComponent />
    <router-view />
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent
  }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h2 {
  margin-bottom: 20px;
}

form {
  display: inline-block;
  text-align: left;
}

label {
  margin-right: 10px;
}

button {
  margin-top: 10px;
}
</style>