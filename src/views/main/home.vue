<template>
    <div class="container">
      <div class="home-title">新品热卖🔥</div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img class="img-style" src="@/assets/total/1.webp" alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img class="img-style" src="@/assets/total/2.jpg" alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img class="img-style" src="@/assets/total/3.jpg" alt="">
          </van-swipe-item> 
        </van-swipe> 
      <div class="home-title">火力全开</div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img class="img-style" src="@/assets/total/4.jpg" alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img class="img-style" src="@/assets/total/5.webp" alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img class="img-style" src="@/assets/total/6.webp" alt="">
          </van-swipe-item> 
        </van-swipe> 
      <div class="home-title">客户专享</div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white"> 
          <van-swipe-item>
            <img class="img-style" src="@/assets/total/11.webp" alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img class="img-style" src="@/assets/total/12.png" alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img  class="img-style" src="@/assets/total/13.png" alt="">
          </van-swipe-item> 
        </van-swipe> 
    </div>
</template>
  
  <style>
  .container { 
    height: 100vh;
    overflow: auto;
    padding-bottom: 50px;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px; 
    text-align: center;
    height: 200px;
    background-color: #39a9ed;
    display: flex;
    align-items: center;
  }
  .img-style{
    width: 100%;
    height: 100%;
  }
  .home-title {
    font-size: 1.5rem;
    text-align: center;
    padding: 20px;
    font-weight: bold;
  }
  </style>