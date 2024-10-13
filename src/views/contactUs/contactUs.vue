<template>
  <!-- <Header></Header> -->
  <div class="contactUsContent">
    <div class="title">
      <div class="title-content">
        <p>联系我们</p>
        <p>
          践行流体机械和水利工程机械装备领域资源整合、勇于创新的发展战略，以“金润石泵”创新振兴为目标，真正实现泥（砂）泵产品和相关配套水利工程机械产品的“中国制造”升级为“中国创造”。
        </p>
      </div>
    </div>
    <div class="about-content">
      <div class="about-content-title">
        <p>石家庄金润石泵机械科技有限公司</p>
        <p>
          金润石泵坚持“以人为本、科技为先、明礼守信、追求卓越”的企业精神和坚持企业发展服务社会的经营理念，通过先进的解决方案为用户提供更精确的订制服务。欢迎联系我们！
        </p>
      </div>
      <a-row :gutter="16">
        <a-col :span="6">
          <div class="one">
            <p>邮箱：</p>
            <p><MailOutlined class="icon" />sales@cnjrpm.com</p>
          </div>
        </a-col>
        <a-col :span="6">
          <div class="one">
            <p>座机：</p>
            <p><PhoneOutlined class="icon" />0311-85426188 / 85426588</p>
          </div>
        </a-col>
        <a-col :span="6">
          <div class="one">
            <p>手机：</p>
            <p><PhoneOutlined class="icon" />13700311218</p>
          </div>
        </a-col>
        <a-col :span="6">
          <div class="one">
            <p>地址：</p>
            <p>
              <EnvironmentOutlined
                class="icon"
              />河北省石家庄市行唐县经济开发区玉晶西路路东胜利大街路南
            </p>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons-vue";
import Header from "../header/header.vue";
</script>

<style>
.contactUsContent {
  /* position: absolute; */
  padding-top: 70px;
  width: 100%;
  .title {
    width: 100%;
    height: 300px;
    background-image: url(./image/轮播图1.jpg);
    background-size: 100% 100%;
    color: #fff;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    .title-content {
      width: 50%;
      align-items: center;
      text-align: center;
      :nth-child(1) {
        font-size: 40px;
        font-weight: bold;
        text-align: center;
      }
      :nth-child(2) {
        font-size: 15px;
        letter-spacing: 0px;
        margin-top: 10px;
        text-align: center;
        line-height: 26px;
      }
    }
  }
  .nav {
    height: 64px;
    line-height: 64px;
    align-content: center;
    width: 94%;
    margin: 0 auto;
  }
  .about-content {
    padding-top: 70px;
    padding-bottom: 50px;
    width: 94%;
    margin: 0 auto;
    .about-content-title {
      :nth-child(1) {
        font-size: 32px;
        color: rgba(2, 0, 28, 1);
        text-align: left;
        font-weight: bold;
      }
      :nth-child(2) {
        line-height: 1.5;
        font-size: 14px;
        margin-top: 15px;
        text-align: left;
        max-width: 1200px;
        color: #333333;
      }
    }
    .about-content-p {
      :nth-child(1) {
        line-height: normal;
        font-size: 20px;
        color: rgba(0, 0, 0, 1);
        margin-top: 15px;
        font-weight: bold;
      }
      :nth-child(2) {
        font-size: 16px;
        color: rgba(51, 51, 51, 1);
        line-height: 2;
        font-size: 16px;
        color: rgba(51, 51, 51, 1);
        line-height: 2;
        margin-top: 30px;
      }
    }
    .one {
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: rgba(255, 255, 255, 1);
      box-shadow: 0 10px 30px 0px rgb(29 56 72 / 15%);
      padding-top: 40px;
      padding-bottom: 40px;
      padding-left: 15px;
      padding-right: 15px;
      min-height: 193px;
      > :nth-child(1) {
        line-height: normal;
        font-size: 20px;
        color: rgba(0, 0, 0, 1);
        margin-top: 5px;
        font-weight: bold;
      }
      :nth-child(2) {
        font-size: 16px;
        color: #333333;
      }
      .icon {
        color: #013fa0;
        margin-right: 10px;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
