<template>
	<view>
		<view class="p-3 flex align-center">
			<image src="/static/demo/6.jpg" mode="" style="height: 120rpx;width: 120rpx;" class="bg-light rounded-circle flex-shrink"></image>
			<view class="flex flex-column pl-3 flex-1">
				<view class="font-md text-dark">
					summer
					<text class="font-sm text-light-muted ml-3">男 广东</text>
				</view>
				<text class="font-sm text-muted">全国牙签代言人</text>
			</view>
		</view>
		<view class="f-divider"></view>
		<f-list-item title="我的作品" icon="iconshipin" :showRightIcon="false" rightText="26个"></f-list-item>
		<f-list-item title="收藏" icon="iconshoucang1" ></f-list-item>
		<f-list-item title="关注" icon="iconguanzhu"  rightText="567"></f-list-item>
		<f-list-item title="历史记录" icon="iconlishi" ></f-list-item>
		<view class="f-divider"></view>
		<view class="py-2 px-3">
			<main-big-button @click='addMsg'>立即投稿</main-big-button>
		</view>
	</view>
</template>

<script>
	import fListItem from '@/components/common/f-list-item.vue';
	import mainBigButton from '@/components/common/main-big-button.vue';
	export default {
		components:{
			fListItem,mainBigButton
		},
		data() {
			return {
				
			}
		},
		methods: {
			//选择投稿类型
			addMsg(){
				
			}
		}
	}
</script>

<style>

</style>
