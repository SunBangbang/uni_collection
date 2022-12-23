<template>
	<view class="search_result container">
		<!-- 通知栏 -->
		<view class="noticebar">
			<view class="">
				<image src="@/static/index/noticebar-icon.png" mode="widthFix" style="width: 38rpx;"></image>
			</view>
			
			<view class="notice_text">
				你的每日免费查看资料剩余<text style="color: #5D1CD6;font-size: 40rpx;">10</text>次
			</view>
		</view>
		<!-- 通知栏 -->
		<!-- 主播列表 -->
		<view class="list_content">
			
			<view class="list" v-for="(item,index) in anchor_list" :key="index">
				<view class="head_img">
					<view class="pic_num">
						<view class="">
							<image src="@/static/index/pic-icon.png" mode="widthFix" style="width: 24rpx;"></image>
						</view>
						<view class="">
							6
						</view>
					</view>
					<image src="@/static/index/headimg.png" mode="" style="width: 100%;height: 100%;"></image>
				</view>
				
				<view class="details">
					<view class="row">
						<view class="name">
							{{item.name}}
						</view>
						<view class="authentication">
							{{item.authentication}}
						</view>
						<view class="love">
							<image src="@/static/index/love.png" mode="widthFix" style="width: 64rpx;"></image>
						</view>
					</view>
					<view class="row">
					<text>{{item.age}}岁</text>
					<text>{{item.year}}</text>
					</view>
					<view class="row">
						<image src="@/static/index/location-icon.png" mode="widthFix" style="width: 40rpx;"></image> {{item.address}}
					</view>
				</view>
			</view>
			
		</view>
		<!-- 主播列表 结束-->
	</view>
</template>

<script>
	export default{
		data(){
			return{
				anchor_list:[
					{name:"小寒寒",age:"21岁",authentication:"已认证",year:"2年",address:"西安市"},
					{name:"小寒寒",age:"21岁",authentication:"已认证",year:"2年",address:"西安市"},
					{name:"小寒寒",age:"21岁",authentication:"已认证",year:"2年",address:"西安市"},
					{name:"小寒寒",age:"21岁",authentication:"已认证",year:"2年",address:"西安市"},
					{name:"小寒寒",age:"21岁",authentication:"已认证",year:"2年",address:"西安市"},
					{name:"小寒寒",age:"21岁",authentication:"已认证",year:"2年",address:"西安市"}
				]
			}
		}
	}
</script>

<style scoped>
	.search_result{
		
	}
	.noticebar{
		width: 710rpx;
		height: 60rpx;
		background: #fff;
		border-radius:4rpx;
		margin: 24rpx auto;
		font-size: 28rpx;
		display: flex;
		line-height: 60rpx;
	}
	.noticebar image{
		display: block;
		align-self: center;
		margin-left: 16rpx;
	}
	.noticebar>view{
		align-self: center;
		letter-spacing: 2rpx;
	}
	.notice_text{
		margin-left: 8rpx;
	}
	.list{
		height: 302rpx;
		width: 710rpx;
		/* width: 100%; */
		background: #FFFFFF;
		border-radius: 20rpx;
		display: flex;
		box-sizing: border-box;
		padding: 20rpx;
		margin: 24rpx auto;
	}
	.head_img{
		width: 262rpx;
		height: 262rpx;
		position: relative;
	}
	.pic_num{
		width: 52rpx;
		height: 32rpx;
		background: rgba(0,0,0,.2);
		position: absolute;
		right: 12rpx;
		bottom: 12rpx;
		z-index: 1;
		display: flex;
		font-size: 24rpx;
		color: #fff;
		justify-content: center;
	}
	.pic_num image{
		display: block;
		margin-right: 2rpx;
	}
	.pic_num>view{
		align-self: center;
	}
	.details{
		/* background: #999; */
		width: 370rpx;
		height: 100%;
		margin-left: 30rpx;
		display: flex;
		flex-direction: column;
	}
	.row{
		display: flex;
		height: 64rpx;
	}
	.row view{
		align-self: center;
	}
	.name{
		font-size: 40rpx;
		color: #000;
		font-weight: 600;
		/* height: 32rpx;
		line-height: 32rpx; */
	}
	.authentication{
		background: #FFB837;
		color: #fff;
		text-align: center;
		font-size: 24rpx;
		width: 96rpx;
		height: 40rpx;
		line-height: 40rpx;
		margin-left: 8rpx;
	}
	.love{
		margin-left: auto;
	}
	.row:nth-of-type(2){
		margin-top: 30rpx;
		font-size: 26rpx;	
		color: #666666;
	}
	.row text{
		height:44rpx;
		padding:0rpx 18rpx ;
		border: 1rpx solid #ccc;
		line-height: 44rpx;
		margin-right: 16rpx;
	}
	.row:nth-of-type(3){
	margin-top: auto;
	height: 44rpx;
	font-size: 26rpx;
	color: #666;
	line-height: 44rpx;
	}
	.row:nth-of-type(3) image{
	margin-right: 8rpx;
	}
</style>