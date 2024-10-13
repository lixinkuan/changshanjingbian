<template>
  <div class="footer">
    <a-row>
      <a-col :span="12"
        ><PhoneOutlined class="icon" /> 0311-85426188 / 85426588</a-col
      >
      <a-col :span="12"><PhoneOutlined class="icon" /> 13700311218</a-col>
    </a-row>
    <a-row>
      <a-col :span="12"><MailOutlined class="icon" /> sales@cnjrpm.com</a-col>
      <a-col :span="12"
        ><EnvironmentOutlined class="icon" />
        河北省石家庄市行唐县经济开发区玉晶西路路东胜利大街路南</a-col
      >
    </a-row>
  </div>
</template>
<script lang="ts" setup>
import { h, ref } from "vue";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons-vue";
</script>

<style scoped>
.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  /* height: 70px; */
  line-height: 70px;
  background-color: rgba(27, 34, 41, 1);
  color: #fff;
  text-align: center;
}
</style>
