<template>
  	<div class="home_container">
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
        this.$store.dispatch('getData').then(res => {
            console.log(res)
        }).catch( error => {
            console.log(error)
        })

    }
}
</script>

<style lang="less" scoped>
    .home_container{

    }
</style>
