<template>
    <div class="address-list">
        <h2 class="form-title">维修网点</h2>
      <van-list>
        <van-cell class="cell-box" v-for="(address, index) in addressList" :key="index" :title="address.name" :label="address.detail" />
      </van-list>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        addressList: [
          {
            name: '家庭地址',
            detail: '北京市朝阳区xxx街道xxx小区1号楼101室',
          },
          {
            name: '办公地址',
            detail: '北京市海淀区xxx街道xxx大厦12层1201室',
          },
          {
            name: '收货地址',
            detail: '北京市东城区xxx街道xxx小区2号楼202室',
          },
        ],
      };
    },
  };
  </script>
  
<style scoped>
.address-list {
  padding: 0 10px;
}
.form-title{
    font-size: 20px;
    margin-bottom: 20px;
    text-align: center;
  }
.van-cell__title {
  font-size: 16px;
  color: #333;
  line-height: 1.5;
}
.cell-box {
    background: #f7f8fa;
    border-radius: 10px;
    margin-bottom: 10px;
}
.van-cell__label {
  font-size: 14px;
  color: #999;
  line-height: 1.5;
}
</style>