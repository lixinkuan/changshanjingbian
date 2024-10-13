<script setup>
import { RouterView } from "vue-router";
import Header from "./views/header/header.vue";
import Footer from "./views/footer/footer.vue";
</script>

<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>

<style>
a {
  text-decoration: none;
  color: #1b242b;
}
</style>
