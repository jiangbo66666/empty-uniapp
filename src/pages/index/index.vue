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
				<u-switch v-model="isChecked" size="30"></u-switch>
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
				isChecked: false
			}
		},
		onLoad() {
			// api.request({
			// 	url:"/aaa/bbb",
			// 	method: "POST"
			// }).then(()=>{
			// 	console.log(11111111111111111)
			// })
		},
		methods: {

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
