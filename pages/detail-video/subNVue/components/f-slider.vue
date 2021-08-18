<template>
	<view class=" align-center position-relative flex" style="height: 44px;"
	@touchstart = 'touchstart' @touchmove = 'touchmove' @touchend='touchend' @touchcancel = 'touchcancel'
	>
		<!-- 线条 -->
		<view class="flex-1 rounded" style="height: 3px;background-color: rgba(255,255,255,0.5);">
			<view class="bg-main" style="height: 3px;" :style="activeStyle"></view>
		</view>
		<!-- 圆点 -->
		<view class="position-absolute rounded-circle bg-main-hover" style="width: 15px;height: 15px;" :style="activeDotSty"></view> 
	</view>
</template>

<script>
	export default {
		inject:['v'],
		props:{
			currentTime:{
				type:Number,
				default:0
			}, 
			duration:{
				type:Number,
				default:0
			}
		},
		data() {
			return {
				width: 0,//进度条的总宽度
				activeWith:0,//当前播放进度的宽度
				moveStatus:false,//拖拽状态
			}
		},
		computed:{
			activeStyle(){
				return `width:${this.activeWith}px`
			},
			activeDotSty(){
				return `left:${this.activeWith}px`
			},
			current(){//通过进度条长度，反推出时间
				return this.width==0?0: (this.activeWith/this.width) * this.duration
			}
		},
		watch:{
			currentTime(newval,oldval){
				if(!this.moveStatus){ //没有处在拖拽状态，才监听时间
					this.active()
				}
			}
		},
		created() {
			this.width = this.v.windowWidth-44-44-80-15;
			this.active()
		},
		methods:{
			active(){
				this.activeWith = this.duration ==0 ? 0: (this.currentTime/this.duration) * this.width
			},
			touchstart(e){
				if(this.duration === 0) return
				this.moveStatus = true; //开启拖拽状态
				//e.changedTouches[0].screenX (当前触摸点距离屏幕左边的长度)
				 this.activeWith= e.changedTouches[0].screenX-44
			},
			touchmove(e){
				if(this.duration === 0) return
				let d = e.changedTouches[0].screenX-44
				if(d<=0){
					this.activeWith = 0
				}else if(d>=this.width){
					this.activeWith = this.width
				}else {
					this.activeWith = d
				}
				this.$emit('update',this.current)
			},
			touchend(e){
				if(this.duration === 0) return
				this.moveStatus = false; //结束拖拽状态
				this.$emit('change',this.current)
			},
			touchcancel(e){//滑动手势被中断时（例如提示电量不足）
				this.touchend(e)
			}
		}
	}
</script>

<style>
</style>
