<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<u-rate :count="count" v-model="value"></u-rate>
			<text class="title">{{title}}</text>

				<!-- <u-upload
					:fileList="fileList1"
					@afterRead="afterRead"
					@delete="deletePic"
					name="1"
					multiple
					:maxCount="10"
				></u-upload> -->
				<view @click="getLocal">点我</view>
				<view @click="pay">点击支付</view>
				<u-switch v-model="isChecked" size="30" @change="Hello"></u-switch>
				<map id="map" class="map" :polyline="polyline" :longitude="longitude" :latitude="latitude"></map>
			<!-- <text class="title">{{title}}</text>
			<u-action-sheet :list="list" v-model="show"></u-action-sheet>
			<button type="default" >通过方法跳转到about页面</button>
			<u-tag text="标签" plain size="mini" type="warning"></u-tag>
			<u-tag text="标签"></u-tag>
			<u-badge :type="type" max="99" :value="value"></u-badge> -->
		</view>
	</view>
</template>

<script>
	const app = getApp()
	import api from "../../common/request"
	export default {
		data() {
			return {
				title: 'Hello',
				list: [{
					text: '点赞',
					color: 'blue',
					fontSize: 28
				}, {
					text: '分享'
				}, {
					text: '评论'
				}],
				show: true,
				count: 4,
				value: 2,
				isChecked: false,
				latitude: 39.909088,
    		longitude: 116.397643,
				polyline: []
			}
		},
		onLoad() {
			// this.buttonDriving()
			// api.request({
			// 	url:"/aaa/bbb",
			// 	method: "POST"
			// }).then(()=>{
			// 	console.log(11111111111111111)
			// })
		},
		methods: {
			pay() {
				uni.requestPayment({

				})
			},
			getLocal() {
				let _this = this;
				uni.getLocation({
					success(res){
						console.log("uni.getLocation")
						uni.openLocation({
							latitude:_this.latitude,
							longitude:_this.longitude,
							scale: 15
						})
					}
				})
			},
			Hello(){
				this.buttonDriving()
			},
			buttonDriving(e){
				var _this = this
				//通过wx.request发起HTTPS接口请求
				uni.request({
					//地图WebserviceAPI驾车路线规划接口 请求路径及参数（具体使用方法请参考开发文档）
					url: 'https://apis.map.qq.com/ws/direction/v1/driving/?key=3GXBZ-BLMES-J2GOC-6TBV4-WBZP5-HAFCV&from=39.894772,116.321668&to=39.902781,116.427171',
					success(res){
						var result = res.data.result
						var route = result.routes[0]
						
						var coors = route.polyline, pl = [];
							//坐标解压（返回的点串坐标，通过前向差分进行压缩）
							var kr = 1000000;
							for (var i = 2; i < coors.length; i++) {
								coors[i] = Number(coors[i - 2]) + Number(coors[i]) / kr;
							}
							//将解压后的坐标放入点串数组pl中
							for (var i = 0; i < coors.length; i += 2) {
								pl.push({ latitude: coors[i], longitude: coors[i + 1] })
							}

							console.log(pl,"plplpl11")
							_this.latitude = pl[0].latitude
							_this.longitude = pl[0].longitude
							_this.polyline = [{
									points: pl,
									color: '#58c16c',
									width: 6,
									borderColor: '#2f693c',
									borderWidth: 1,
									dottedLine: true
								}]

							// _this.setData({
							// 	// 将路线的起点设置为地图中心点
							// 	latitude:pl[0].latitude
							// 	longitude:pl[0].longitude,
							// 	// 绘制路线
							// 	polyline: [{
							// 		points: pl,
							// 		color: '#58c16c',
							// 		width: 6,
							// 		borderColor: '#2f693c',
							// 		borderWidth: 1
							// 	}]
							// })
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 100rpx;
		color: #8f8f94;
	}
</style>
