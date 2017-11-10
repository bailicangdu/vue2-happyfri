<template>
  	<div>
    	<container-item father-component="item"></container-item>
  	</div>
</template>

<script>
import ContainerItem from 'components/ContainerItem'

export default {
	name: 'item',
  	components: {
   		ContainerItem
  	},
  	created(){
	  // 进入题目页面，开始计时
	  // commit 用于修改数据
	  this.$store.commit('REMBER_TIME');
  	}
}

</script>

<style lang="less">


</style>
