<template>
	<view>	
		<view class="" v-for="(item,index) in list" :key="index">
			<media-list  :item="item" :index="index"></media-list>
			<view class="flex" style="height: 100rpx;">
				<view class="flex-1 flex justify-center align-center" hover-class="bg-light">修改</view>
				<view class="flex-1 flex justify-center align-center" hover-class="bg-light"
				@click="openVideoList(item)">视频</view>
				<view class="flex-1 flex justify-center align-center" hover-class="bg-light">删除</view>
			</view>
			<view class="f-divider"></view>
		</view>
	</view>
</template>

<script>
	import mediaList from '@/components/common/media-list.vue';
	export default {
		components:{
			mediaList
		},
		data() {
			return {
				list:[{
					cover:'/static/demo/list2/1.jpg',
					title:'吴签的爱',
					create_time:'今天07:00',
					play_count:0,
					damu_count:0
				},{
					cover:'/static/demo/list2/1.jpg',
					title:'吴签的爱',
					create_time:'今天07:00',
					play_count:0,
					damu_count:0
				},{
					cover:'/static/demo/list2/1.jpg',
					title:'吴签的爱',
					create_time:'今天07:00',
					play_count:0,
					damu_count:0
				},{
					cover:'/static/demo/list2/1.jpg',
					title:'吴签的爱',
					create_time:'今天07:00',
					play_count:0,
					damu_count:0
				}
				]
			}
		},
		methods: {
			openVideoList(item){
				uni.navigateTo({
					url: '../user-videa-list/user-videa-list',
				});
			}
		}
	}
</script>

<style>

</style>
