<template>
	<view>
		<view class="p-3 flex align-center">
			<image src="/static/demo/6.jpg" mode="" style="height: 120rpx;width: 120rpx;"
				class="bg-light rounded-circle flex-shrink"></image>
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
		<f-list-item title="收藏" icon="iconshoucang1"></f-list-item>
		<f-list-item title="关注" icon="iconguanzhu" rightText="567"></f-list-item>
		<f-list-item title="历史记录" icon="iconlishi"></f-list-item>
		<view class="f-divider"></view>
		<view class="py-2 px-3">
			<main-big-button @click='addMsg'>立即投稿</main-big-button>
		</view>
		<fPopup ref="popu">
			<view class="position-absolute bottom-0 left-0 right-0 bg-white animated faster fadeIn ">
				<view class="flex" style="height: 200rpx;">
					<view class="flex-1 flex justify-center align-center flex-column">
						<text
							class="iconfont icondingdanwenjian flex align-center justify-center text-white bg-primary rounded-circle"
							style="width: 80rpx;height: 80rpx;"></text>
						<text class="font mt-1 text-muted">单集</text>
					</view>
					<view class="flex-1 flex justify-center align-center flex-column">
						<text
							class="iconfont icon918caidan_wenjian flex align-center justify-center text-white bg-main rounded-circle"
							style="width: 80rpx;height: 80rpx;"></text>
						<text class="font mt-1 text-muted">连载</text>
					</view>
				</view>
				<view class="f-divider"></view>
				<view class="flex align-center justify-center px-2 font-md text-muted " hover-class="bg-light"
					@click.stop="hidePopu">取消</view>
			</view>
		</fPopup>
	</view>
</template>

<script>
	import fListItem from '@/components/common/f-list-item.vue';
	import mainBigButton from '@/components/common/main-big-button.vue';
	import fPopup from '@/components/common/f-popup.vue';
	export default {
		components: {
			fListItem,
			mainBigButton,
			fPopup
		},
		data() {
			return {
				
			}
		},
		methods: {
			//选择投稿类型
			addMsg() {
				this.$refs.popu.show()
			},
			hidePopu(){
				this.$refs.popu.hide()
			}
		}
	}
</script>

<style>

</style>
