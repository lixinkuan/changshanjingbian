<template>
  <!-- <Header></Header> -->
  <Content></Content>
  <!-- <Footer></Footer> -->
</template>
<script lang="ts" setup>
import { h, ref } from "vue";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import { MenuProps } from "ant-design-vue";
import Header from "../views/header/header.vue";
import Footer from "../views/footer/footer.vue";
import Content from "../views/content/content.vue";
</script>
