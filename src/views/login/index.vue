<template>
    <div class="login-container">
        <van-form @submit="onSubmit">
            <van-field v-model="username" placeholder="用户名" prefix="<van-icon name=" person  /> 
            />
            <van-field v-model="password" placeholder="密码" type="password" prefix="<van-icon name=" lock  /> 
            />
            <van-button type="primary" @click="onSubmit">登录</van-button>
        </van-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.username && this.password) {
                // 这里可以添加登录逻辑，例如调用 API  
                console.log('用户名：', this.username)
                console.log('密码：', this.password)
            }
        }
    }
}
</script>

<style scoped>  .login-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      background-color: #f5f5f5;
      width: 100%;
      max-width: 400px;
  }
</style>  
