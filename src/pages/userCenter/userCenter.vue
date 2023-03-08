<template>
	<view class="content">
    <view class="map_container">
      <map class="map" id="map" :longitude="longitude" :latitude="latitude" scale="14" show-location="true" :markers="markers" bindmarkertap="makertap"></map>
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
        latitude: '',
        longitude: '',
        textData: {}
			}
		},
		onLoad() {
      var that = this;
      var myAmapFun = new amapFile.AMapWX({key:'2b2b0e3571315e34a789036606cabb19'});
      myAmapFun.getPoiAround({
        iconPathSelected: '选中 marker 图标的相对路径', //如：..­/..­/img/marker_checked.png
        iconPath: '未选中 marker 图标的相对路径', //如：..­/..­/img/marker.png
        success: function(data){
          markersData = data.markers;
          that.markers = markersData
          that.latitude = markersData[0].latitude
          that.longitude = markersData[0].longitude
          that.showMarkerInfo(markersData,0);
        },
        fail: function(info){
          wx.showModal({title:info.errMsg})
        }
      })
		},
		methods: {
      makertap: function(e) {
        var id = e.markerId;
        var that = this;
        that.showMarkerInfo(markersData,id);
        that.changeMarkerColor(markersData,id);
      },
      showMarkerInfo: function(data,i){
        var that = this;
        that.textData = {
          name: data[i].name,
          desc: data[i].address
        }
      },
      changeMarkerColor: function(data,i){
        var that = this;
        var markers = [];
        for(var j = 0; j < data.length; j++){
          if(j==i){
            data[j].iconPath = "选中 marker 图标的相对路径"; //如：..­/..­/img/marker_checked.png
          }else{
            data[j].iconPath = "未选中 marker 图标的相对路径"; //如：..­/..­/img/marker.png
          }
          markers.push(data[j]);
        }
        that.markers = markers
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
