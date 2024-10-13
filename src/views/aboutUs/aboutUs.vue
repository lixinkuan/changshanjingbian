<template>
  <!-- <Header></Header> -->
  <div class="content">
    <div class="title">
      <div class="title-content">
        <p>关于常山</p>
        <p>
          践行流体机械和水利工程机械装备领域资源整合、勇于创新的发展战略，以“金润石泵”创新振兴为目标，真正实现泥（砂）泵产品和相关配套水利工程机械产品的“中国制造”升级为“中国创造”。
        </p>
      </div>
    </div>
    <!-- <div class="nav">
      <a-breadcrumb separator=">">
        <a-breadcrumb-item href=""><HomeOutlined />首页</a-breadcrumb-item>
        <a-breadcrumb-item href="">产品中心</a-breadcrumb-item>
      </a-breadcrumb>
    </div> -->
    <div class="about-content">
      <a-row>
        <a-col :span="12"
          ><div class="about-content-p">
            <p>
              专业生产渣浆泵、船用挖泥泵、采砂泵等离心式泵和相关配套水利工程机械设备
            </p>
            <p>
              石家庄金润石泵机械科技有限公司是集科研、设计、制造于一体的渣浆泵、船用挖泥泵、采砂泵等离心式泵和相关配套水利工程机械设备的专业化公司。金润石泵坚持“以人为本、科技为先、明礼守信、追求卓越”的企业精神和坚持企业发展服务社会的经营理念，通过先进的解决方案为用户提供更精确的订制服务。
            </p>
          </div></a-col
        >
        <a-col :span="12"><img src="./image/轮播图1.jpg" alt="" /></a-col>
      </a-row>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { RightOutlined, HomeOutlined } from "@ant-design/icons-vue";
import Header from "../header/header.vue";
</script>

<style scoped>
.content {
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
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
