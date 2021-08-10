<template>
	<view>
		<!-- #ifdef MP -->
		<!-- 导航栏 -->
		<view class="flex align-center fixed-top" style="height: 44px;">
			<!-- 搜索框 -->
			<view class="flex align-center flex-1 rounded-circle py-1 px-1 ml-2"
				style="background-color: #f6F7f8;color:#959fa0 ;">
				<text class="iconfont iconsousuokuang"></text>
				<text>精彩热搜：吴签</text>
			</view>
			<view class="flex align-center px-2" style="color:#959fa0 ;">分类</view>
		</view>
		<view style="height: 44px;"></view>
		<!-- #endif -->

		<!-- 轮播图组件 -->
		<view class="px-3 py-2">
			<swiper-dot :info="swipers" :current="current">
				<swiper circular :autoplay="true" :interval="3000" :duration="150" :current="current"
					style="height: 250rpx;" @change="changeSwiper">
					<swiper-item v-for="(item,index) in swipers" :key="index">
						<image :src="item.src" mode="aspectFill" style="height: 250rpx;width: 100%;" class="rounded-lg">
						</image>
					</swiper-item>
				</swiper>
			</swiper-dot>
		</view>
		<!-- 列表样式一 -->
		<card title="为你推荐">
			<view class="f-list">
				<view class="rounded-lg border" v-for="(item,index) in 6" :key="index"
					style="margin-left: 15rpx;margin-right: 15rpx;min-height: 5rpx;width: 328rpx;position: relative;"
					@click="openDetailVideo()">
					<image src="/static/demo/list2/1.jpg" mode="" style="width: 100%;height: 220rpx;"
						class="rounded-top-lg"></image>
					<view class="flext align-center text-white"
						style="height: 65rpx;background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8));position: absolute;left: 0;right: 0;top: 155rpx;">
						<text class="iconfont iconbofangshu font-md mx-1"></text>
						<text class="font-sm">200万</text>
						<text class="iconfont icondanmushu font-md mx-1"></text>
						<text class="font-sm">8899</text>
					</view>
					<view class="px-1 pb-1">
						<view class="font">
							标题
						</view>
						<view class="flex align-center justify-between text-light-muted">
							<text class="font">恶搞</text>
							<text class="iconfont icongengduo"></text>
						</view>
					</view>
				</view>
			</view>
		</card>
		<view class="f-divider"></view>
		<!-- 列表样式二-->
		<card title="为你推荐">
			<view class="f-list">
				<view class="rounded-lg" v-for="(item,index) in 6" :key="index"
					style="margin-left: 15rpx;margin-right: 15rpx;min-height: 5rpx;width: 210rpx;position: relative;">
					<image src="/static/demo/list3/1.webp" mode="" style="width: 100%;height: 280rpx;"
						class="rounded-lg">
					</image>
					<view class="flext align-center text-white rounded-bottom-lg"
						style="height: 65rpx;background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8));position: absolute;left: 0;right: 0;top: 215rpx;">
						<text class="iconfont iconbofang font-md mx-1"></text>
						<text class="font-sm">200万</text>
					</view>
					<view class="font">
						标题
					</view>
				</view>
			</view>
		</card>
		<view class="f-divider"></view>
		<!-- 列表样式三-->
		<card title="为你推荐">
			<view class="f-list">
				<media-list v-for="(item,index) in list3" :key="index" :item="item" :index="index"></media-list>
			</view>
		</card>
	</view>
</template>

<script>
	import swiperDot from '@/components/common/swiper-dot.vue';
	import card from '@/components/common/card.vue';
	import mediaList from '@/components/common/media-list.vue';
	export default {
		components: {
			swiperDot,
			card,
			mediaList
		},
		data() {
			return {
				current: 0,
				swipers: [{
					src: "../../static/demo/swiper/1.jpg",
					title: "吴签的爱"
				}, {
					src: "../../static/demo/swiper/2.jpg",
					title: "吴签的很大"
				}, {
					src: "../../static/demo/swiper/3.jpg",
					title: "吴签爱上坐牢"
				}, ],
				
				list3:[{
					cover:'/static/demo/list2/1.jpg',
					title:'吴签的爱',
					create_time:'今天07:00',
					play_count:0,
					damu_count:0
				}]
			}
		},
		onLoad() {

		},
		onNavigationBarSearchInputClicked() {
			console.log("点击搜索框")
		},
		onNavigationBarButtonTap(e) {
			console.log("点击了按钮")
		},
		methods: {
			changeSwiper(e) {
				this.current = e.detail.current;
			},
			openDetailVideo(){
				uni.navigateTo({
					url: '../detail-video/detail-video',
				});
			}
		}
	}
</script>

<style>
	.f-list {
		display: flex;
		flex-wrap: wrap;
		padding-left: 15rpx;
		padding-right: 15rpx;
	}
</style>
