<template>
    <div class="list-container">
      <h2 class="form-title">已激活产品</h2>
      <van-list>
        <van-cell v-for="(item, index) in productList" :key="index"  :title="item.brand" @click="showDetails(item)">
            <template v-slot:icon>
                <div class="left-icon">
                  <img class="img-style" :src="item.image" alt="">
                </div> 
            </template>  
            <template v-slot:label>
                <div class="desc">
                    {{ item.productName }}
                    <span class="activation-date">激活时间：{{ item.activationDate }}</span>
                </div>  
            </template>
        </van-cell>
      </van-list>
      <van-dialog v-model="showDialog" title="产品详情"   :show-cancel-button="true" cancel-button-text="关闭" confirm-button-text="取消激活" @confirm="cancelActivation">
        <div class="dialog-content">
        <div class="detail-item">
          <span class="label">品牌:</span>
          <span class="value">{{ selectedProduct.brand }}</span>
        </div>
        <div class="detail-item">
          <span class="label">产品名称:</span>
          <span class="value">{{ selectedProduct.productName }}</span>
        </div>
        <div class="detail-item">
          <span class="label">货号:</span>
          <span class="value">{{ selectedProduct.itemNumber }}</span>
        </div>
        <div class="detail-item">
          <span class="label">激活日期:</span>
          <span class="value">{{ selectedProduct.activationDate }}</span>
        </div>
        <div class="detail-item">
          <span class="label">是否在保:</span>
          <span class="value">{{ selectedProduct.inWarranty ? '是' : '否' }}</span>
        </div>
        <div class="qr-code-container">
          <img class="qr-code" src="path_to_qr_code_image" alt="二维码">
          <span class="qr-code-label">查看二维码</span>
        </div> 
      </div> 
    </van-dialog>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        productList: [
            {
            brand: '品牌1',
            productName: '产品1',
            itemNumber: '货号1',
            activationDate: '2023-11-01',
            inWarranty: true,
            image: require('@/assets/total/chuizi.jpeg')
            },
            {
            brand: '品牌2',
            productName: '产品2',
            itemNumber: '货号2',
            activationDate: '2023-11-05',
            inWarranty: false,
            image: require('@/assets/total/tools.jpeg')
            },
            {
            brand: '品牌3',
            productName: '产品3',
            itemNumber: '货号3',
            activationDate: '2023-11-10',
            inWarranty: true,
            image: require('@/assets/total/zhuan.jpeg')
            },
        ],
        selectedProduct: {},
        showDialog: false
      };
    },
    methods: {
        showDetails(item) {
            this.selectedProduct = item;
            this.showDialog = true;
        },
        cancelActivation() {

        }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .list-container {
    padding: 10x;
  }
  .form-title{
    font-size: 20px;
    margin-bottom: 20px;
    text-align: center;
  }
  .activation-date {
    font-size: 12px;
    color: #999;
  }
  .desc {
    display: flex;
    justify-content: space-between;
  }
.dialog-content {
  text-align: left;
  padding: 10px 0;
}
.detail-item {
  padding: 0 20px;
  display: flex;
  margin-bottom: 10px;
  font-size: 0.8rem;
}
.van-cell {
  align-items: center;
}
.left-icon {
    margin-right: 10px;
    display: flex;
    align-items: center;
    width: 60px;
    height: 100%;
    .img-style {
       width: 100%;
       height: 100%;
    }
}
.label {
  flex-shrink: 0;
  font-weight: bold;
  padding-right: 5px;
  width: 80px;
}

.value {
  flex-grow: 1;
}

.qr-code-container {
  margin-top: 20px;
  text-align: center;
}

.qr-code {
  width: 120px;
  height: 120px;
}

.qr-code-label {
  display: block;
  margin-top: 8px;
  font-size: 12px;
}
  </style>