<template>
	<view>
			<uni-swipe-action v-for="(item,index) in list" :key="index">
				<uni-swipe-action-item :options="options" @click="bindClick($event,item)">
					<media-list  :item="item" :index="index"></media-list>
				</uni-swipe-action-item>
			</uni-swipe-action>
	</view>
</template>

<script>
	import mediaList from '@/components/common/media-list.vue';
	import uniSwipeAction from '@/components/uni-ui/uni-swipe-action/uni-swipe-action.vue';
	import uniSwipeActionItem from '@/components/uni-ui/uni-swipe-action-item/uni-swipe-action-item.vue';
	export default {
		components:{
			mediaList,
			uniSwipeAction,
			uniSwipeActionItem
		},
		data() {
			return {
				options: [{
					text: '取消收藏',
					style: {
						backgroundColor: 'rgb(255,58,49)'
					}
				}],
				list:[{
					id:1,
					cover:'/static/demo/list2/1.jpg',
					title:'吴签的爱',
					create_time:'今天07:00',
					play_count:0,
					damu_count:0
				},{
					id:2,
					cover:'/static/demo/list2/1.jpg',
					title:'吴签的爱',
					create_time:'今天07:00',
					play_count:0,
					damu_count:0
				},{
					id:3,
					cover:'/static/demo/list2/1.jpg',
					title:'吴签的爱',
					create_time:'今天07:00',
					play_count:0,
					damu_count:0
				},{
					id:4,
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
			bindClick(e,item) {
				this.$H.post('/fava/video',{
					video_id:item.id
				},{ token:true }).then(res=>{
					uni.showToast({
						title: res.msg,
						icon: 'none'
					});
					this.page = 1
					this.getData()
				})
			},
		}
	}
</script>

<style>

</style>
