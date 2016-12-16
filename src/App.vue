<template>
	<div id="app">
		<div class="alert_cover">
			<span class="alert_cover_text">请将手机竖起，以便更好的体验</span>
		</div>	
    	<router-view></router-view>
    </div>
</template>

<script>

  	export default {
    
  	}

</script>

<style lang="less">
  	.alert_cover{
	  	position: fixed;
	  	top:0;
	  	bottom: 0;
	  	left: 0;
	  	right: 0;
	  	z-index: 999999;
	  	background-color: #343b41;
	  	display: none;
	  	.alert_cover_text{
	  		position: absolute;
	  		top: 50%;
	  		margin-top: -15px;
	  		font-size: 30px;
	  		width: 100%;
	  		color: #fff;
	  		text-align: center;
	  	}
  	}
  	@media screen and (orientation:portrait) {
		.alert_cover{
			display: none;
		}
	}

	@media screen and (orientation:landscape) {
	   .alert_cover{
			display: block;
		}
		body{
		 	padding-top: 0;
		}
	}
</style>
