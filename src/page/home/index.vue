<template>
  	<div class="home_container">
        <!-- 父组件向子组件传送消息 props father-component -->
        <itemcontainer father-component="home"></itemcontainer>
    </div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer'

export default {
	name: 'home',
  	components: {
  		itemcontainer
  	},
    created(){
        
    }
}
</script>

<style lang="less" scoped>
    .home_container{

    }
</style>
