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
      <div class="about-content-title">
        <p>资质荣誉</p>
        <p>
          全面贯彻GB/T19001-2016/ISO9001:2015
          质量认证体系要求,严格按照公司的质量、环境和职业健康安全管理手册执行，公司内部编制了生产作业指导书，通过产品检验规程、工艺流程卡、焊接过程监控记录、压力试验记录、喷漆检验记录、原材料采购验证记录、产品检验报告等规范化管理，保证了产品质量
        </p>
      </div>
      <a-row :gutter="16">
        <a-col :span="6">
          <div class="one">
            <img src="./image/轮播图1.jpg" alt="" />
            <p>会员单位</p>
          </div>
        </a-col>
        <a-col :span="6">
          <div class="one">
            <img src="./image/轮播图1.jpg" alt="" />
            <p>会员单位</p>
          </div>
        </a-col>
        <a-col :span="6">
          <div class="one">
            <img src="./image/轮播图1.jpg" alt="" />
            <p>会员单位</p>
          </div>
        </a-col>
        <a-col :span="6">
          <div class="one">
            <img src="./image/轮播图1.jpg" alt="" />
            <p>会员单位</p>
          </div>
        </a-col>
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
    .about-content-title {
      :nth-child(1) {
        font-size: 32px;
        color: rgba(2, 0, 28, 1);
        text-align: center;
        font-weight: bold;
      }
      :nth-child(2) {
        line-height: 1.5;
        font-size: 14px;
        margin-top: 15px;
        text-align: center;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
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
      max-width: 100%;
      background: #f2f2f2;
      max-height: 100%;
      padding: 10px;
      p {
        margin-top: 5px;
        font-size: 16px;
        color: rgba(51, 51, 51, 1);
        line-height: 1.5;
        text-align: center;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
