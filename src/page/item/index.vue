<template>
  	<div>
    	<router-link to="/score">答题页</router-link>
    	<div>{{ $store.state.scores }}</div>
    	<div @click="addScore">增加</div>
  	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'item',
  	data () {
    	return {
     
    	}
  	},
  	components: {
   		
  	},
  	computed: {

  	},
	methods: mapActions([
	    'addScore',
	]),
	created () {
	    this.$store.dispatch('getData').then((res) => {
	    	console.log(res)
	    }).catch((error) => {
	    	console.log(error)
	    })
	}
}
</script>

<style>

</style>
