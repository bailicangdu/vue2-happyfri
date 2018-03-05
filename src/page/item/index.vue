<template>
  	<div>
    	<itemcontainer father-component="item"></itemcontainer>
  	</div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer'

export default {
	name: 'item',
  	components: {
   		itemcontainer
  	},
  	created(){
      //进入题目页面，开始计时
  		this.$store.commit('REMBER_TIME');
  	}
}

</script>

<style lang="less">
    

</style>
