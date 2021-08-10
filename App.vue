<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* #ifndef APP-NVUE */
	@import url("./common/uni.css");
	@import url("./common/animate.css");
	/* #endif */
	
	/* 引入全局样式 */
	@import url("./common/common.css");
	@import url("./common/free.css");
	
	/* #ifndef APP-NVUE */
	@import url("./common/icon.css");
	/* #endif */
</style>
