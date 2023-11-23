<template>
    <div class="login-container">
        <div class="logos">
            <div class="home-title">售后系统</div>
            <svg-icon icon-class="home-logo" className="custom-home"></svg-icon>
        </div>
        <van-cell-group class="login-form">
        <van-field
            v-model="countryCode"
            label="国家代码"
            placeholder="请输入国家代码"
            border
            clearable
        ></van-field>
        <van-field
            v-model="phoneNumber"
            label="手机号码"
            placeholder="请输入手机号码"
            border
            clearable
        ></van-field>
        <van-field
            v-model="password"
            label="密码"
            placeholder="请输入密码"
            type="password"
            border
            clearable
        ></van-field>
        <van-button type="primary" @click="login" round block>登录</van-button>
        </van-cell-group>
    </div>
</template>
  
<script> 
export default {
    data () {
        return {
            countryCode: 86,
            phoneNumber: '',
            password: ''
        }
    },
    methods: {
        login() {
            if(this.phoneNumber.trim().length == 0) {
                this.$notify({ type: 'danger', message: '手机号码必须填写' });
                return
            }
            if(this.countryCode.trim().length == 0) {
                this.$notify({ type: 'danger', message: '国家代码必须填写' });
                return
            }
            if(this.password.trim().length == 0) {
                this.$notify({ type: 'danger', message: '密码必须填写' });
                return
            }
            if(this.loading) return
            this.loading = true
            this.$store.dispatch('user/setUserInfo', {
                token: '123123132123',
                data: {
                    name: '测试',
                    account: this.phoneNumber
                }
            }).then(e => {
                this.loading = false
                this.$router.push('/')
            })
        }
    }
}
</script>
<style>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-form {
  width: 80%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

/* 修改字体样式和颜色 */
.van-field__label,
.van-field__control,
.van-button {
  font-family: Arial, sans-serif;
  color: #333;
}

/* 调整按钮样式 */
.van-button {
  margin-top: 20px;
  color: #fff
}
.custom-home {
    font-size: 200px;
}
.logos {
    position: relative;
}
.home-title {
    position: absolute;
    top: 0;
    text-align: center;
    width: 100%;
    font-weight: 600;
    font-size: 20px;
}
</style>