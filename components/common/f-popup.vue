<template>
	<!-- 弹窗 -->
	<view >
		<view  v-if="status" @click.stop="hide" class="position-fixed top-0 left-0 right-0 bottom-0 animated faster fadeIn"
			style="background-color: rgba(0,0,0,0.3);z-index: 1000;">
			<slot></slot>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				status: false
			}
		},
		methods:{
			show(){
				this.status = true;
			},
			hide(){
				this.status = false;
			}
		}
	}
</script>

<style>
</style>
