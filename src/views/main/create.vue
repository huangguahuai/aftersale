<template> 
  <div class="form-container">
    <h2 class="form-title">激活产品</h2> 
    <van-cell-group>
      <van-field name="radio" label="序列号">
        <template #input>
          <van-radio-group v-model="hasSerise" @change="changeSerise" direction="horizontal">
            <van-radio :name="true">存在</van-radio>
            <van-radio :name="false">不存在</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="serialNumber" 
        label="产品序列号"
        placeholder="请输入产品序列号"
        class="custom-field"
        input-class="custom-input"
      >
        <template v-slot:right-icon>
          <van-icon v-if="hasSerise" @click="showScan" name="scan" color="#323233" size="20" />
        </template>
      </van-field>
      <van-cell
        title="小票"
        value-class="receipt-value" 
        @click="showUploader" 
      >
        <van-uploader
          v-model="fileList"
          accept="image/*"
          :max-count="1" 
        ></van-uploader>
      </van-cell>
      <van-cell
        title="机身Label"
        value-class="receipt-value" 
        @click="showUploader" 
      >
        <van-uploader
          v-model="labelInfo"
          accept="image/*"
          :max-count="1" 
        ></van-uploader>
      </van-cell> 
      <van-cell
        title="其他"
        value-class="receipt-value" 
        @click="showUploader" 
      >
        <van-uploader
          v-model="other"
          accept="image/*"
          :max-count="1" 
        ></van-uploader>
      </van-cell> 
      <van-cell  class="custom-field" title="日期" :value="date" @click="show = true" />
      <van-calendar v-model="show" @confirm="onConfirm" /> 
      <van-field
        v-model="address"
        label="地址"
        placeholder="请输入地址"
        class="custom-field"
        input-class="custom-input"
      ></van-field>
      <van-field
        v-model="contact"
        label="联系方式"
        placeholder="请输入联系方式"
        class="custom-field"
        input-class="custom-input"
      ></van-field> 
    </van-cell-group>
    <div class="submit-button-container">
        <van-button type="primary" class="submit-button" round @click="submitForm">激活</van-button>
    </div> 
  </div>
</template>

<style lang="scss" scoped>
.form-container {
  padding: 0 20px;
}

.custom-field {
  margin-bottom: 10px;
  .van-cell__value {
    text-align: left;
    color: #323233 !important;
  }
  
}
.van-cell__title {
      margin-right: 12px;
  }
.form-title{
    font-size: 20px;
    margin-bottom: 20px;
    text-align: center;
}

.custom-input {
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 10px;
}

.custom-uploader {
  margin-top: 10px;
}
.receipt-value{
    text-align: left;
}
.van-cell__title{
    width: 6.2em;
    flex: none;
}
.submit-button-container {
    width: 100%;
    text-align: center;
}
.submit-button{
    width: 200px;
    margin-top: 20px;
   
}
</style>

<script>
export default {
  data() {
    return {
      serialNumber: '',
      fileList: [],
      labelInfo: [],
      other: [],
      date: '',
      address: '',
      contact: '',
      hasSerise: true,
      show: false
    };
  },
  methods: {
    showUploader() { 
    },
    submitForm() {
      // 在此处提交表单数据
      console.log('提交表单:', this.serialNumber, this.fileList, this.labelInfo, this.date, this.address, this.contact);
    },
    showScan() {
      
    },
    changeSerise() {
      if(this.hasSerise) {
        this.serialNumber = ''
      } else {
        this.serialNumber = 'ADHJd-jkjs2-123SH-HDnsa-Asd23'
      }
    },
    formatDate(date) {
      console.log(date, date.getYear(), date.getMonth())
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    }
  },
};
</script>