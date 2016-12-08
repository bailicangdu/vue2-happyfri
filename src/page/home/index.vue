<template>
  	<div class="home_container">
        <itemcontainer father-component="home"></itemcontainer>
  	</div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer'

export default {
	name: 'home',
  	data () {
    	return {
     		
    	}
  	},
  	components: {
  		itemcontainer
  	},
}
</script>

<style lang="less" scoped>
    .home_container{

    }
</style>
