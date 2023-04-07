<template>
	<view class="content">
		<view class="header">
			<swiper class="head-swiper" circular>
				<swiper-item class="swiper-item" v-for="(item,index) in carNumList"  :key="index">
					<view class="aver swiper-item-top">
						<view>{{item.carNumber}}</view>
						<view class="">{{item.isVerify? "已认证":"未认证"}}</view>
					</view>
					<view class="aver swiper-item-bot">
						<view>{{item.isVerify? "已入场":"未入场"}}</view>
						<view>微信先离后付</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="entry-body">
			<swiper class="body-swiper" circular>
				<swiper-item class="swiper-item" v-for="(item,index) in entryList"  :key="index">
					<view class="nav-item" v-for="(inneritem,innerindex) in item"  :key="innerindex">
						<image class="nav-item-img" src="/static/logo.png" scaleToFill></image>
						<view class="nav-item-txt">{{ inneritem.title }}</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="invest">
			<swiper class="invest-swiper" indicator-dots circular>
				<swiper-item class="swiper-item" v-for="(item,index) in carNumList"  :key="index">
				</swiper-item>
			</swiper>
		</view>
		<view class="adver">
			<view class="adver-title">
				精彩活动
			</view>
			<view class="adver-content">
				<view class="adver-cont left">
					
				</view>
				<view class="adver-cont right">
					<view class="top">

					</view>
					<view class="bottom">
						
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	import api from "../../common/request"
	export default {
		data() {
			return {
				carNumList:[
					{carNumber: "苏b122323",isVarify: true},
					{carNumber: "苏b222222"},
					{carNumber: "苏b333333"},
				],
				entryList: [
					[					
						{title: "停车缴费1"},
						{title: "停车缴费2"},
						{title: "停车缴费3"},
						{title: "停车缴费4"},
						{title: "停车缴费5"},
						{title: "停车缴费6"},
						{title: "停车缴费7"},
						{title: "停车缴费8"},
					]
				]
			}
		},
		onLoad() {
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content{
		padding: 32rpx;
		flex-wrap:wrap;
		display: flex;
		justify-content: center;
		align-items: center;
		// 头部的swiper区块
		.header{
			margin-top: 10rpx;
			background-color: #0990ff;
			box-shadow: 1px 5px 5px #75bff6;
			width: 100%;
			border-radius: 10rpx;
			height: 200rpx;
			.head-swiper{
				height: 100%;
				// 单个swiper区块
				.swiper-item{
					height: 100%;
					display: flex;
					justify-content: left;
					flex-direction: column;
					.aver{
						flex: 1;
					}
				}
			}
		}
		// 菜单栏
		.entry-body{
			margin-top: 50rpx;
			width: 100%;
			background-color: #f5f7f9;
			border-radius: 10rpx;
			height: 500rpx;
			.body-swiper{
				height: 100%;
				.swiper-item{
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: space-between;
					flex-wrap:wrap;
					.nav-item{
						background-color: #f5f7f9;
						margin: 20rpx;
						.nav-item-img{
							margin: 24rpx;
							width: 72rpx;
							height: 72rpx;
						}
						.nav-item-txt{
							text-align: center;
							font-size: 24rpx;
							width: 100%;
						}
					}
				}
			}
		}
		// 广告轮播图位置
		.invest{
			margin-top: 10rpx;
			width: 100%;
			height: 200rpx;
			background: #75bff6;
			border-radius: 10rpx;
			.invest-swiper{
				height: 100%;
			}
		}
		//广告内容区域
		.adver{
			width: 100%;
			.adver-title{
				font-size: 32rpx;
				padding-left: 32rpx;
				text-align: left;
			}
			.adver-content{
				background: #FFFFFF;
				box-shadow: 2rpx 6rpx 24rpx 0rpx rgba(56, 152, 216, 0.08);
				height: 320rpx;
				display: flex;
				padding: 32rpx;
				border-radius: 10rpx;
				.left{
					border-radius: 10rpx;
					margin-right: 16rpx;
					background-color: #F5F8FF;
					width: 100%;
					height: 100%;
					flex: 1;
				}
				.right{
					display: flex;
					flex-direction: column;
					border-radius: 10rpx;
					margin-left: 16rpx;
					flex: 1;
					width: 100%;
					height: 100%;
					.top{
						flex: 1;
						border-radius: 10rpx;
						margin-bottom: 32rpx;
						background-color: #F5F8FF;
					}
					.bottom{
						flex: 1;
						border-radius: 10rpx;
						background-color: #F5F8FF;
					}
				}
			}
		}
	}
</style>
