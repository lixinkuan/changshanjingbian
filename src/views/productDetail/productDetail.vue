<template>
  <!-- <Header></Header> -->
  <div class="content">
    <!-- <div class="nav">
      <a-breadcrumb separator=">">
        <a-breadcrumb-item href=""><HomeOutlined />首页</a-breadcrumb-item>
        <a-breadcrumb-item href="">产品中心</a-breadcrumb-item>
        <a-breadcrumb-item href="">产品详情</a-breadcrumb-item>
      </a-breadcrumb>
    </div> -->
    <div class="pro-list-content">
      <div>
        <div class="center">
          <div class="center-title">产品中心</div>
          <div class="center-ul">
            <ul>
              <li>
                <RightOutlined class="icon" /><router-link to="/products_list"
                  >离心式泵产品</router-link
                >
              </li>
              <li class="little-li">
                <RightOutlined class="icon" /><router-link to="/products_list"
                  >离心式泵产品</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="product">
          <div class="product-title">
            <div class="contentSwiper">
              <swiper
                :navigation="{
                  nextEl: '.product-swiper-button-next',
                  prevEl: '.product-swiper-button-prev',
                }"
                :modules="modules"
                class="productSwiper"
              >
                <swiper-slide
                  ><img src="./image/轮播图2.jpg" alt=""
                /></swiper-slide>
                <swiper-slide
                  ><img src="./image/轮播图1.jpg" alt=""
                /></swiper-slide>
                <swiper-slide
                  ><img src="./image/轮播图2.jpg" alt=""
                /></swiper-slide>
                <swiper-slide
                  ><img src="./image/轮播图1.jpg" alt=""
                /></swiper-slide>
                <swiper-slide
                  ><img src="./image/轮播图2.jpg" alt=""
                /></swiper-slide>
                <div class="product-swiper-button-prev" slot="button-prev">
                  <LeftCircleOutlined />
                </div>
                <div class="product-swiper-button-next" slot="button-next">
                  <RightCircleOutlined />
                </div>
              </swiper>
            </div>

            <div class="product-title-con">
              <p>离心泵</p>
              <p>离心泵是一种通过叶轮旋转产生的离心力来输送液体的泵设备。</p>
              <p>电话：<span>17731108467</span></p>
            </div>
          </div>
          <div class="product-content">
            <div class="product-content-title"><span>产品描述</span></div>
            <div class="product-content-p">
              <p>一、定义与原理</p>
              <p>离心泵是一种通过叶轮旋转产生的离心力来输送液体的泵设备。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import {
  LeftOutlined,
  RightOutlined,
  HomeOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons-vue";
import Header from "../header/header.vue";
import {
  FreeMode,
  Navigation,
  Autoplay,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
const modules = [Navigation, Autoplay];
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
  .pro-list-content {
    background-color: rgba(242, 242, 242, 1);
    padding: 10px 20px;
    > div {
      margin: 0 auto;
      padding-bottom: 70px;
      padding-top: 50px;
      display: flex;
      .center {
        width: 320px;
        flex-shrink: 0;
        .center-title {
          line-height: 1.5;
          display-radio: 1;
          font_radio: 2;
          font-size: 22px;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          background-color: rgba(1, 63, 160, 1);
          padding-top: 20px;
          padding-bottom: 20px;
          padding-left: 15px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          padding-right: 15px;
        }
        .center-ul {
          background: #fff;
          ul {
            list-style-type: none;
            padding: 10px 20px;
            li {
              /* display: flex; */
              justify-content: space-between;
              position: relative;
              line-height: 46px;
              border-bottom: 1px solid #ebebeb;
              font-size: 16px;
              font-weight: bold;
              transition: all ease 0.3s;
              width: 100%;
              color: #1b242b;
              background: #ffffff;
              display-radio: flex;
              font-family: "7b07d37b-e2cf-40a5-b2b3-02699b44f79b";
              background-color: #ffffff;

              .icon {
                color: #999;
                width: 15px;
                margin-right: 10px;
                margin-top: 0;
              }
            }
            .little-li {
              /* display: flex; */
              justify-content: space-between;
              position: relative;
              line-height: 20px;
              border-bottom: 1px solid #e1e1e1;
              font-size: 16px;
              transition: all ease 0.3s;
              width: 100%;
              color: #666;
              padding: 8px 15px;
              background: #f8f8f8;
              display-radio: flex;
              font-family: "75d5f28f-3154-430e-9498-6b655db921cf";
              background-color: #f8f8f8;
            }
          }
        }
      }
      .product {
        min-height: 300px;
        background-color: rgba(255, 255, 255, 1);
        padding-top: 25px;
        padding-left: 25px;
        padding-right: 25px;
        padding-bottom: 25px;
        /* flex-grow: 1; */
        /* display: flex; */
        margin-left: 2%;
        .product-title {
          display: flex;
          > div {
            width: 100%;
          }
          .contentSwiper {
            width: 600px;
            height: 300px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .product-title-con {
            padding-left: 20px;
            :nth-child(1) {
              font-size: 22px;
              font-weight: bold;
              color: rgba(51, 51, 51, 1);
              line-height: 1.5;
              margin-bottom: 20px;
            }
            :nth-child(2) {
              font-size: 14px;
              color: rgba(141, 141, 141, 1);
              line-height: 1.5;
              width: 100%;
              background: rgb(0 0 0 / 3%);
              padding: 15px;
            }
            :nth-child(3) {
            }
          }
        }
        .product-content {
          margin-top: 40px;
          margin-bottom: 40px;
          .product-content-title {
            border-bottom: 1px solid #ddd;
            > span {
              color: #ffffff;
              font-weight: bold;
              background: #013fa0;
              border-bottom: none;
              min-width: 100px;
              font-size: 16px;
              padding: 0 15px;
              height: 42px;
              border-radius: 5px 5px 0 0;
              line-height: 42px;
              text-align: center;
              display: inline-block;
            }
          }
          .product-content-p {
            :nth-child(1) {
              font-size: 18px;
              color: #013fa0;
              margin: 15px 0px;
              font-weight: bold;
              padding: 10px 10px;
              background: #efefef;
              border-top-right-radius: 0px;
              font-weight: bold;
              border-bottom-right-radius: 0px;
              border-left: 12px solid #013fa0;
              position: relative;
            }
            :nth-child(2) {
              color: #74777c;
              font-size: 16px;
              margin-bottom: 5px;
              padding-left: 25px;
              background-size: 14px;
            }
          }
        }
      }
    }
  }
}
.product-swiper-button-prev,
.product-swiper-button-next {
  z-index: 2;
  position: absolute;
  top: 143px;
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
</style>
