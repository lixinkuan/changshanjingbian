<template>
  <div class="content">
    <!-- 第二行 轮播图 -->
    <div class="introduce">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="10"
        :loop="true"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        class="contentSwiper"
      >
        <!-- :autoplay="{ delay: 6000 }" -->
        <swiper-slide
          ><img src="./image/lunbotu/轮播图2.jpg" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="./image/lunbotu/轮播图1.jpg" alt=""
        /></swiper-slide>
        <!-- <div class="swiper-button-prev" slot="button-prev">
          <LeftOutlined />
        </div>
        <div class="swiper-button-next" slot="button-next">
          <RightOutlined />
        </div> -->
      </swiper>
    </div>

    <div class="product">
      <div class="p_item">
        <p class="p_1">
          <span>PRODUCTS</span>
        </p>
        <p class="p_2">产品中心</p>
        <p class="p_3">
          专业生产渣浆泵、船用挖泥泵、采砂泵等离心式泵和相关配套水利工程机械设备
        </p>
      </div>
      <div style="height: 100%">
        <swiper
          :navigation="{
            nextEl: '.product-swiper-button-next',
            prevEl: '.product-swiper-button-prev',
          }"
          :modules="modules2"
          class="productSwiper"
        >
          <swiper-slide
            ><img src="./image/lunbotu/轮播图2.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="./image/lunbotu/轮播图1.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="./image/lunbotu/轮播图2.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="./image/lunbotu/轮播图1.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="./image/lunbotu/轮播图2.jpg" alt=""
          /></swiper-slide>
          <div class="product-swiper-button-prev" slot="button-prev">
            <LeftCircleOutlined />
          </div>
          <div class="product-swiper-button-next" slot="button-next">
            <RightCircleOutlined />
          </div>
        </swiper>
      </div>
    </div>
    <div class="aboutUs">
      <div class="p_item">
        <p class="p_1">
          <span>ABOUT US</span>
        </p>
        <p class="p_2">关于我们</p>
        <p class="p_3">
          “金润”坚持“以人为本、科技为先、明礼守信、追求卓越”
          的企业宗旨和坚持企业发展服务社会的经营理念，通过先进的解决方案为用户提供更精确的订制服务。
        </p>
      </div>

      <div class="aboutUs-content">
        <div>
          <p>JINRUN</p>
          <p>石家庄金润石泵机械科技有限公司</p>
          <hr />
          <p>
            石家庄金润石泵机械科技有限公司是集科研、设计、制造于一体的渣浆泵、船用挖泥泵、采砂泵等离心式泵和相关配套水利工程机械设备的专业化公司。金润石泵坚持“以人为本、科技为先、明礼守信、追求卓越”的企业精神和坚持企业发展服务社会的经营理念，通过先进的解决方案为用户提供更精确的订制服务。
          </p>
          <div class="more">查看更多+</div>
        </div>
        <div>
          <img src="./image/lunbotu/轮播图1.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="qualification">
      <div class="p_item">
        <p class="p_1">
          <span>QUALIFICATION</span>
        </p>
        <p class="p_2">资质荣誉</p>
        <p class="p_3">
          全面贯彻GB/T19001-2016/ISO9001:2015
          质量认证体系要求,严格按照公司的质量、环境和职业健康安全管理手册执行
        </p>
      </div>
      <div style="height: 100%">
        <!-- <swiper
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }"
          :pagination="true"
          :modules="modules2"
          class="productSwiper"
        >
          <swiper-slide
            ><img src="./image/lunbotu/轮播图2.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="./image/lunbotu/轮播图1.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="./image/lunbotu/轮播图2.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="./image/lunbotu/轮播图1.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="./image/lunbotu/轮播图2.jpg" alt=""
          /></swiper-slide>
          <div class="swiper-button-prev" slot="button-prev">
            <LeftCircleOutlined />
          </div>
          <div class="swiper-button-next" slot="button-next">
            <RightCircleOutlined />
          </div>
        </swiper> -->

        <swiper
          :slidesPerView="3"
          :spaceBetween="30"
          :pagination="{
            clickable: true,
          }"
          :modules="qualificationModules"
          :autoplay="{ delay: 6000 }"
          class="qualificationSwiper"
        >
          <swiper-slide
            ><img src="./image/lunbotu/轮播图2.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="./image/lunbotu/轮播图1.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="./image/lunbotu/轮播图2.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="./image/lunbotu/轮播图1.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="./image/lunbotu/轮播图2.jpg" alt=""
          /></swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons-vue";
// Import Swiper Vue.js components
import { LeftOutlined, RightOutlined } from "@ant-design/icons-vue";

import { Swiper, SwiperSlide } from "swiper/vue";

// import required modules
import {
  FreeMode,
  Navigation,
  Autoplay,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const modules = [Navigation, Autoplay, FreeMode];
const modules2 = [Navigation];
const qualificationModules = [Pagination, Autoplay];
</script>

<style scoped>
/* For demo */
.content {
  padding-top: 70px;
  .introduce {
    height: calc(100vh - 70px);
    .contentSwiper {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-button-prev,
    .swiper-button-next {
      z-index: 2;
      position: absolute;
      bottom: 70px;
      height: 50px;
      width: 50px;
      background: rgba(255, 255, 255, 0.1);
      transition: all ease 0.3s;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .swiper-button-prev {
      right: 160px;
      &:hover {
        background: #013fa0;
      }
    }

    .swiper-button-next {
      right: 100px;
      &:hover {
        background: #013fa0;
      }
    }
  }
  .product {
    /* width: 800px; */
    /* height: 500px; */
    margin: 0 auto;
    .productSwiper {
      width: 60%;
      height: 460px;
    }

    .product-swiper-button-prev,
    .product-swiper-button-next {
      z-index: 2;
      position: absolute;
      top: 205px;
      height: 50px;
      width: 50px;
      background: rgba(255, 255, 255, 0.1);
      transition: all ease 0.3s;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .product-swiper-button-prev {
      left: 5px;
      &:hover {
        background: #013fa0;
      }
    }
    .product-swiper-button-next {
      right: 5px;
      &:hover {
        background: #013fa0;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }

  .aboutUs {
    background-color: rgba(245, 245, 245, 1);
    .aboutUs-content {
      display: flex;
      width: 94%;
      margin: 0 auto;
      border-radius: 20px;
      background-color: #fff;
      > div {
        width: 50%;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      > div:nth-child(1) {
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 40px;
        padding-bottom: 40px;
        > p:nth-child(1) {
          line-height: 1.5;
          font_radio: 2;
          display-radio: 1;
          font-size: 42px;
          color: #013fa0;
          text-align: left;
          font-weight: normal;
          margin-top: 0px;
          margin-bottom: 0px;
          font-family: "7b07d37b-e2cf-40a5-b2b3-02699b44f79b";
          -webkit-text-stroke: 1px #013fa000;
          transition: 0.5s;
        }
        > p:nth-child(2) {
          transition-property: all;
          font_radio: 2;
          color: #013fa0;
          font-weight: bold;
          text-align: left;
          font-size: 32px;
          margin-top: 0px;
          line-height: 2;
          display-radio: 1;
        }
        > hr {
          max-width: 50px;
          border-top-style: solid;
          border-top-width: 2px;
          border-top-color: #013fa0;
          margin-bottom: 10px;
          margin-top: 20px;
          margin-left: 0px;
        }
        > p:nth-child(4) {
          line-height: 2;
          transition-property: all;
          font_radio: 2;
          color: rgba(0, 0, 0, 1);
          font-weight: normal;
          text-align: left;
          font-size: 16px;
          margin-top: 0px;
          min-width: 0px;
          max-width: none;
          -webkit-line-clamp: 5;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          display-radio: -webkit-box;
        }
        .more {
          display: block;
          position: relative;
          overflow: hidden;
          text-align: center;
          box-sizing: border-box;
          padding: 8px;
          background_radio: 2;
          border_radio: 2;
          font_radio: 2;
          radius_radio: 2;
          transition-property: all;
          width: auto;
          max-width: 160px;
          max-height: none;
          background-color: #013fa0;
          border-style: solid;
          font-size: 16px;
          line-height: 1.8;
          font-weight: normal;
          min-height: 0px;
          margin-left: 0px;
          margin-right: auto;
          margin-top: 0px;
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
          border-width: 0px;
          color: rgba(255, 255, 255, 1);
          height: auto;
          cursor: pointer;
          &:hover {
            background-color: rgba(81, 81, 81, 1);
            font-size: 16px;
          }
        }
      }
      > div:nth-child(2) {
        padding-top: 30px;
        padding-bottom: 30px;
      }
    }
  }
  .p_item {
    margin-bottom: 20px;
    .p_1 {
      line-height: normal;
      font-size: 18px;
      color: #013fa0;
      text-align: center;
      width: auto;
      max-width: 140px;
      margin-left: auto;
      margin-right: auto;
      padding-top: 70px;
      position: relative;
      padding-bottom: 5px;
      font-family: "6a9a5c3e-41b7-41c7-8a72-5d89ca941ab2";
      :after {
        content: "";
        position: absolute;
        width: 100%;
        height: 15px;
        background: rgb(1 63 160 / 16%);
        bottom: 0;
        left: 0;
        z-index: 0;
      }
    }
    .p_2 {
      line-height: 1.5;
      font-size: 40px;
      color: rgba(53, 54, 56, 1);
      text-align: center;
      font-weight: bold;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    .p_3 {
      line-height: 1.5;
      text-align: center;
      font-size: 16px;
      color: rgba(93, 93, 93, 1);
      margin-top: 5px;
      max-width: 900px;
      margin-left: auto;
      margin-right: auto;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  .qualificationSwiper {
    height: 400px;
    img {
      padding: 40px;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
