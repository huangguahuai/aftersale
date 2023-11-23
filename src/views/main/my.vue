<template>
    <div class="personal-center">
       <div class="user-box">
        <van-image
            round
            fit="cover"
            width="5rem"
            height="5rem"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="user-info">
            <div class="name">{{ name }}</div>
            <div class="account">{{ account }}</div>
        </div>
       </div>
      <div class="logout-container">
        <van-button class="logout-button" type="danger" block @click="logout">退出登录</van-button>
      </div>
    </div>
</template>
  
  <script >
  import { mapGetters } from 'vuex';
  export default {
    data() {
      return { 
        name: 'John', 
      };
    },
    computed: {
        ...mapGetters(['account'])  
    },
    methods: {
      logout() {
        // 处理退出登录逻辑
        this.$store.dispatch('user/resetToken').then(() => {
            this.$router.push('/login')
        })
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .personal-center {
    padding: 20px;
  }
  
  .avatar-cell {
    display: flex;
    align-items: center;
  }
  
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  
  .logout-container {
    margin-top: 40px;
  }
  .user-box {
    display: flex;
    .user-info {
        margin-left: 10px;
        .name {
            font-weight: 600;
            font-size: 1.2rem;
        }
        .account {
            font-size: 0.8rem;
            color: #333;
        }
    }
  }
  </style>