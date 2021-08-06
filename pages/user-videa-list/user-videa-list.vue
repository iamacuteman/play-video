<template>
	<view class="bg-light" style="min-height: 100vh;">
		<block v-for="(item,index) in list" :key="index">
			<view v-if="!item.isedit" class="bg-white">
				<video :src="item.video" style="height: 350rpx;width: 100%;" controls=""></video>
				<form-item label="标题">
					<text class="font">{{item.title}}</text>
				</form-item>
				<view class="flex" style="height: 100rpx;">
					<view class="flex-1 flex font justify-center align-center" hover-class="bg-light"
						@click="item.isedit = true">修改</view>
					<view class="flex-1 flex font justify-center align-center" hover-class="bg-light"
						@click="deleteItem(index)">删除</view>
				</view>

			</view>
			<view v-else class="bg-white">
				<view class="bg-light position-relative" style="height: 350rpx;" hover-class="bg-hover-light">
					<video v-if="item.video" :src="item.video" style="height: 350rpx;width: 100%;" controls=""></video>
					<view v-if="!item.video"
						class="position-absolute left-0 right-0 bottom-0 top-0  flex flex-column align-center justify-center"
						style="background-color: rgba(255,255,255,0.2);" @tap="upload(item)">
						<text class="iconfont iconjia" style="font-size: 50rpx;"></text>
						<text class="font text-muted">点击添加视频</text>
					</view>
				</view>
				<view v-if="item.video" class="flex align-center justify-center font border-bottom border-top" style="height: 100rpx;" hover-class="bg-light" @tap="upload(item)">点击切换视频 </view>
				<form-item label="标题">
					<input type="text" v-model="item.title" placeholder="请填写视频标题" placeholder-class="text-light-muted"
						class=" w-100 pr-5" />
				</form-item>
				<form-item label="描述">
					<textarea v-model="item.desc" placeholder="请填写视频描述" style="width: 550rpx;" class="py-3" />
				</form-item>
				<view class="flex" style="height: 100rpx;">
					<view class="flex-1 flex font justify-center align-center bg-main text-white"
						hover-class="bg-main-hover" @click="sumbit(item)">完成</view>
					<view class="flex-1 flex font justify-center align-center" hover-class="bg-light"
						@click="deleteItem(index)">删除</view>
				</view>
			</view>
			<view class="f-divider"></view>
		</block>
		<view v-if="showButton" class="flex justify-center align-center bg-main text-white font "
			style="height: 100rpx;" hover-class="bg-main-hover" @click="add">+添加新章节</view>
	</view>
</template>

<script>
	import formItem from '@/components/common/form-item.vue';
	export default {
		components: {
			formItem
		},
		data() {
			return {
				list: [{
					video: '',
					title: '第一集：xxx',
					desc: '吴签的故事',
					isedit: false
				}],
			}
		},
		computed: {
			showButton() {
				return this.list.filter(item => item.isedit).length === 0
			}
		},
		methods: {
			//完成
			sumbit(item) {
				if (!item.video) {
					return uni.showModal({
						content: '视频不能为空',
					});
				}
				if (!item.title) {
					return uni.showModal({
						content: '标题不能为空',
					});
				}
				item.isedit = false;
			},
			//删除
			deleteItem(index) {
				uni.showModal({
					content: '是否要删除该视频',
					success: res => {
						if (res.confirm) {
							this.list.splice(index, 1)
						}
					},
				});
			},
			//添加章节
			add() {
				this.list.push({
					video: '',
					title: '',
					desc: '',
					isedit: true
				})
			},
			//上传视频
			upload(item) {
				uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					success: (res)=> {
						item.video = res.tempFilePath;
					}
				});
			}
		}
	}
</script>

<style>

</style>
