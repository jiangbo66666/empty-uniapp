<template>
	<view class="content">
    <view class="map_container">
      <map class="map" id="map" :longitude="longitude" :polyline="polyline" :latitude="latitude" scale="14" show-location="true"></map>
    </view>
    <view class="map_text">
      <text class="h1">{{textData.name}}</text>
      <text>{{textData.desc}}</text>
    </view>
	</view>
</template>

<script>
  var amapFile = require("../../libs/amap-wx.130");//如：..­/..­/libs/amap-wx.js
  var markersData = []; 
	export default {
		data() {
			return {
				title: 'Hello',
        markers: [],
        latitude: '39.989643',
        longitude: '116.481028',
        textData: {},
        polyline: []
			}
		},
		onLoad() {
      var that = this;
      var myAmapFun = new amapFile.AMapWX({key:'2b2b0e3571315e34a789036606cabb19'})
      myAmapFun.getDrivingRoute({
        origin: '116.481028,39.989643',
        destination: '116.434446,39.90816',
        success: function(data){
          var points = [];
          if(data.paths && data.paths[0] && data.paths[0].steps){
            var steps = data.paths[0].steps;
            for(var i = 0; i < steps.length; i++){
              var poLen = steps[i].polyline.split(';');
              for(var j = 0;j < poLen.length; j++){
                points.push({
                  longitude: parseFloat(poLen[j].split(',')[0]),
                  latitude: parseFloat(poLen[j].split(',')[1])
                })
              } 
            }
          }
          that.polyline = [{
            points: points,
            color: "#0091ff",
            width: 6
          }]
        },
        fail: function(info){

        }
      })
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
  #container{
    height: 30%;
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
		font-size: 36rpx;
		color: #8f8f94;
	}
  .map_container{
  position: absolute;
  top: 0;
  bottom: 80px;
  left: 0;
  right: 0;
}
.map{
  width: 100%;
  height: 100%;
}
.map_text{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0px;
  height: 80px;
  background: #fff;
  padding: 0 15px;
}
text{
  margin: 5px 0;
  display: block;
  font-size:12px;
}
.h1{
  margin: 15px 0;
  font-size:15px;
}
</style>
