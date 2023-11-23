<template>
    <div>
        <div>
            <Home v-if="active==0"></Home>
            <Create v-else-if="active==1"></Create>
            <List v-else-if="active==2"></List>
            <Area v-else-if="active==3"></Area>
            <My v-else></My>
        </div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="edit">我要激活</van-tabbar-item>
            <van-tabbar-item icon="completed-o">激活列表</van-tabbar-item>
            <van-tabbar-item icon="location-o">售后维修</van-tabbar-item>
            <van-tabbar-item icon="user-circle-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import Home from './home.vue'
import List from './list.vue'
import My from './my.vue'
import Create from './create.vue'
import Area from './area.vue'
export default {
    components: {
        Home,
        List,
        My,
        Create,
        Area
    },
    data () {
        return {
            active: 0
        }
    },
    methods: {

    }
}
</script>