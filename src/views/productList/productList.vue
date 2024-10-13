<template>
  <div class="content">
    <div class="title">
      <div class="title-content">
        <p>产品中心</p>
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
        <div class="list">
          <div class="pro-content-list-title">
            <span></span>水利工程机械设备配件
          </div>
          <div class="pro-list">
            <a-row :gutter="16">
              <a-col class="gutter-row" :span="8">
                <div class="pro-one">
                  <router-link to="/products_detail"
                    ><img src="./image/轮播图1.jpg" alt=""
                  /></router-link>
                  <p>
                    <router-link to="/products_detail">绞刀总成</router-link>
                  </p>
                  <p>绞刀是绞吸式挖泥船的主要机具，是生产率的保证</p>
                </div>
              </a-col>
              <a-col class="gutter-row" :span="8">
                <div class="pro-one">
                  <router-link to="/products_detail"
                    ><img src="./image/轮播图1.jpg" alt=""
                  /></router-link>
                  <p>
                    <router-link to="/products_detail">绞刀总成</router-link>
                  </p>
                  <p>绞刀是绞吸式挖泥船的主要机具，是生产率的保证</p>
                </div>
              </a-col>
              <a-col class="gutter-row" :span="8">
                <div class="pro-one">
                  <router-link to="/products_detail"
                    ><img src="./image/轮播图1.jpg" alt=""
                  /></router-link>
                  <p>
                    <router-link to="/products_detail">绞刀总成</router-link>
                  </p>
                  <p>绞刀是绞吸式挖泥船的主要机具，是生产率的保证</p>
                </div>
              </a-col>
              <a-col class="gutter-row" :span="8">
                <div class="pro-one">
                  <router-link to="/products_detail"
                    ><img src="./image/轮播图1.jpg" alt=""
                  /></router-link>
                  <p>
                    <router-link to="/products_detail">绞刀总成</router-link>
                  </p>
                  <p>绞刀是绞吸式挖泥船的主要机具，是生产率的保证</p>
                </div>
              </a-col>
              <a-col class="gutter-row" :span="8">
                <div class="pro-one">
                  <router-link to="/products_detail"
                    ><img src="./image/轮播图1.jpg" alt=""
                  /></router-link>
                  <p>
                    <router-link to="/products_detail">绞刀总成</router-link>
                  </p>
                  <p>绞刀是绞吸式挖泥船的主要机具，是生产率的保证</p>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
      </div>
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
      .list {
        min-height: 300px;
        display-radio: 1;
        background-color: rgba(255, 255, 255, 1);
        padding-top: 25px;
        padding-left: 25px;
        padding-right: 25px;
        padding-bottom: 25px;
        flex-grow: 1;
        margin-left: 2%;
        .pro-content-list-title {
          line-height: 1.5;
          font_radio: 2;
          display-radio: 1;
          font-size: 22px;
          font-weight: bold;
          > span {
            display: inline-block;
            width: 5px;
            height: 25px;
            left: 0px;
            top: 12px;
            background: #013fa0;
            margin-right: 10px;
          }
        }
        .pro-list {
          .pro-one {
            border-style: solid;
            border-width: 1px;
            border-color: rgba(221, 221, 221, 1);
            padding-left: 10px;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-right: 10px;
            transition: all 0.5s ease;
            margin-bottom: 20px;
            img {
              width: 100%;
            }
            :nth-child(2) {
              text-align: center;
              font-size: 18px;
              margin-top: 20px;
            }
            :nth-child(3) {
              font-size: 14px;
              color: rgba(51, 51, 51, 1);
              line-height: 1.5;
              margin-top: 10px;
              text-align: center;
              min-height: 42px;
            }
          }
        }
      }
    }
  }
}
</style>
