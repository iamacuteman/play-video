<template>
	<view>
		<!-- #ifdef MP -->
		<!-- 导航栏 -->
		<view class="flex align-center fixed-top" style="height: 44px;">
			<!-- 搜索框 -->
			<view class="flex align-center flex-1 rounded-circle py-1 px-1 mx-2"
				style="background-color: #f6F7f8;color:#959fa0 ;">
				<text class="iconfont iconsousuokuang"></text>
				<text>精彩热搜：吴签</text>
			</view>
		</view>
		<view style="height: 44px;"></view>
		<!-- #endif -->
		<card title="热门分类" :showRefresh = 'false'>
			<scroll-view scroll-x="true" class="scroll-row">
				<icon-cate v-for="(item,index) in list" :key="index" :item = "item"></icon-cate>
			</scroll-view>
		</card>
		<view class="f-divider"></view>
		<card title="全部分类" :showRefresh = 'false'>
			<icon-cate v-for="(item,index) in list" :key="index" :item = "item"></icon-cate>
		</card>
	</view>
</template>

<script>
	import card from '@/components/common/card.vue';
	import iconCate from '@/components/common/icon-cate.vue';
	export default {
		components:{
			card,iconCate
		},
		data() {
			return {
				list:[]
			}
		},
		onLoad() {
			for (let i =0; i< 10; i++) {
				this.list.push(
				{
					name:"分类",
					cover:"/static/demo/cate/1%20(1).png"
				})
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
