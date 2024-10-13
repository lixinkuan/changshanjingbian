<template>
  <div class="header">
    <div>
      <div class="logo">
        <a><img src="./image/logo.png" alt="" /></a>
      </div>
      <a-menu
        class="nav"
        :selectedKeys="selectedKeys"
        mode="horizontal"
        :items="items"
        @click="handleMenuSelect"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { h, ref } from "vue";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import { MenuProps } from "ant-design-vue";
import { useRouter } from "vue-router";
const router = useRouter();
const current = ref<string[]>(["mail"]);
const items = ref<MenuProps["items"]>([
  {
    key: "/",
    label: "首页",
    title: "首页",
  },
  {
    key: "/aboutUs",
    label: "关于常山",
    title: "关于常山",
  },
  {
    key: "/products_list",
    label: "产品中心",
    title: "产品中心",
  },
  {
    key: "/qualification",
    label: "资质荣誉",
    title: "资质荣誉",
  },
  {
    key: "/contactUs",
    label: "联系我们",
    title: "联系我们",
  },
]);
const selectedKeys = ref(["/"]);

const handleMenuSelect = (selectedItem) => {
  const key = selectedItem.key;
  selectedKeys.value = [key];
  router.push(key);
};
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  z-index: 2;
  height: 70px;
  line-height: 70px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0 15px rgb(0 0 0 / 20%);
  /* background-color: rgb(14 14 14 / 30%); */

  > div {
    display: flex;
    justify-content: space-between;
    width: 94%;
    margin: 0 auto;
    .logo {
      max-width: 200px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: unset;
      }
    }
    .nav {
      background-color: rgb(0, 0, 0, 0);
      font-size: 17px;
      color: #212529;
    }
    ul {
      border: none;
      line-height: 70px;
    }
  }
}
</style>
