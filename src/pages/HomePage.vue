<template>
  	<div class="home_container">
        <!-- 父组件向子组件传送消息 props father-component -->
        <container-item father-component="home"></container-item>
    </div>
</template>

<script>
import ContainerItem from 'components/ContainerItem'

export default {
	name: 'home',
  	components: {
  		ContainerItem
  	},
    created(){

    }
}
</script>

<style lang="less" scoped>
    .home_container{

    }
</style>
