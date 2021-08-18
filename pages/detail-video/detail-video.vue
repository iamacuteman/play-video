<template>
	<view style="line-height: 1;overflow-y: hidden;">
		<!-- #ifndef APP-PLUS -->
			<video src=""  style="height: 225px;width: 750rpx;" controls></video>
		<!-- #endif -->
		<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'" >
			<view class="border-bottom border-light-secondary flex align-stretch bg-white" style="height: 
			80rpx;position: fixed;left: 0;right: 0; z-index: 100;">
				<view class="flex-1 flex justify-center align-center" v-for="(item,index) in tabBars" :key="index" @click="changeTab(index)">
					<text class="font py-1 " :style="tabIndex === index?'border-bottom: 5rpx solid;':''" 
					:class="tabIndex === index?'text-main border-main':''">{{item.name}}</text>
				</view>
			</view>
			<!-- 占位盒子 -->
			<view style="height: 80rpx;"></view>
			
			<!-- 简介 -->
			<view v-if="tabIndex === 0" class="animated fadeIn fast ">
				<view class=" py-2 flex align-center px-3">
					<image src="../../static/demo/6.jpg" style="height: 80rpx;width: 80rpx;" class="mr-3 rounded-circle"></image>
					<view class="flex flex-column">
						<text class="text-main font-md">昵称</text>
						<text class="text-muted font-sm">369粉丝</text>
					</view>
					<view class="flex align-center justify-center rounded bg-main text-white py-1 px-2 ml-auto"
						hover-class="bg-main-hover">
						<text class="font">关注</text>
					</view>
				</view>
				
				<view class="font-md px-3">
					视频标题
				</view>
				<view class="flext align-center text-muted px-3">
					<text class="iconfont iconbofangshu font-md mr-1"></text>
					<text class="font-sm">200万</text>
					<text class="iconfont icondanmushu font-md mx-1"></text>
					<text class="font-sm">8899</text>
					<text class="font-sm ml-1">今日 10：00</text>
				</view>
				<!-- 滚动 -->
				<view class="py-3 border-top border-bottom border-light-secondary">
					<view class="flex align-center px-3">
						<text class="font-md">选集</text>
						<view class="flex align-center text-muted ml-auto" @click="openPopup">
							共9集 <text class="iconfont iconjinru ml-1"></text>
						</view>
					</view>
					
					<scroll-view scroll-x="true" class="scroll-row" >
						<view v-for="i in 10" :key='i' class="scroll-row-item rounded border ml-2 p-2"
						:class="i === 0?'border-main text-main':'text-muted border-light-secondary'"
						  style="width: 340rpx;">
							<text class="font">第 1 集</text>
							<view class="font-md text-ellipsis">最强发型师</view>
						</view>
					</scroll-view>
				</view>
				<view class="f-list">
					<media-list v-for="(item,index) in list" :key="index" :item="item" :index="index"></media-list>
				</view>
				
			</view>
			<!-- 评论 -->
			<view v-else class="animated fadeIn fast px-3 py-1">
				<!-- 评论列表 -->
				<view class="uni-comment-list">
					<view class="uni-comment-face">
						<image src="../../static/demo/6.jpg" style="width: 80rpx;height: 80rpx;" class="rounded-circle"></image>
					</view>
					<view class="uni-comment-body">
						<view class="uni-comment-top">
							<text class="font text-main">昵称</text>
						</view>
						<view class="uni-comment-date">
							<text class="font-sm text-muted">10:10</text>
						</view>
						<view class="uni-comment-content">
							评论内容
						</view>
						
						<!-- 回复 -->
						<view class="flex flex-wrap p-2 bg-light rounded">
							<text class="font text-main">昵称2:</text>
							回复功能
						</view>
					</view>
				</view>
				
				<!-- 加号 -->
				<view class="position-fixed flex justify-center align-center bg-main rounded-circle animated fast" 
				style="width: 120rpx;height: 120rpx;right: 50rpx;bottom: 50rpx;"
				hover-class="bg-main-hover pulse" @click="openComment">
					<text class="text-white iconfont iconjia"></text>
				</view>
			</view>
		</scroll-view>
		<f-popup ref="popup">
			<view class="position-absolute bottom-0 left-0 right-0 bg-white animated faster fadeIn " @click.stop="stop">
				<view class="" style="height: 600rpx;">
					<view class="flex align-center px-3">
						<text class="font-md ml-3">选集</text>
						<view class=" flex justify-center align-center ml-auto" style="height: 80rpx;width: 80rpx;" hover-class="bg-light" @click="hidePopup">
							<text class="iconfont iconguanbi text-muted"></text>
						</view>
					</view>
					
					<scroll-view scroll-y="true" style="height: 520rpx;">
						<view class="flex flex-wrap" >
							<view style="width: 50%;box-sizing: border-box;" v-for="i in 10" :key='i' class="px-2">
								<view  class="rounded border p-2"
								:class="i === 0?'border-main text-main':'text-muted border-light-secondary'">
									<text class="font">第 1 集</text>
									<view class="font-md text-ellipsis">最强发型师</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</f-popup>
		
		<f-popup ref="discuss">
			<view class="position-absolute bottom-0 left-0 right-0 bg-white animated faster fadeIn " @click.stop="stop">
				<view class="flex align-center px-3" style="100rpx">
					<input type="text"  class="bg-light rounded mr-3 px-2 flex-1" style="height: 60rpx;" placeholder="说句话吧" />
					<view class="flex align-center justify-center rounded bg-main text-white py-1 px-2 ml-auto"
						hover-class="bg-main-hover">
						<text class="font">发送</text>
					</view>
				</view>
			</view>
		</f-popup>
	</view> 
</template>

<script>
	import mediaList from '@/components/common/media-list.vue';
	import fPopup from '@/components/common/f-popup.vue';
	export default {
		components: {
			mediaList,fPopup
		},
		data() {
			return {
				scrollH:500,
				tabBars:[
					{name:'简介'},
					{name:'评论'},
				],
				tabIndex:0,
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
				},{
					cover:'/static/demo/list2/1.jpg',
					title:'吴签的爱',
					create_time:'今天07:00',
					play_count:0,
					damu_count:0
				}]
			}
		},
		onLoad() {
			let res = uni.getSystemInfoSync();
			this.scrollH =res.windowHeight-225
		},
		methods: {
			stop(){
				//只是用来阻止向上冒泡，防止触发关闭弹窗事件
			},
			changeTab(index){
				this.tabIndex = index
			},
			//弹出选集
			openPopup(){
				this.$refs.popup.show()
			},
			hidePopup(){
				this.$refs.popup.hide()
			},
			openComment(){
				this.$refs.discuss.show()
			}
		}
	}
</script>

<style>

</style>
