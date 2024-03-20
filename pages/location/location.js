// pages/location.js
// // 引入SDK核心类
// var QQMapWX = require('../../libs/qqmap-wx-jssdk');
// var qqmapsdk;
// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.js');
var wxMarkerData = [];
Page({
  /**
   * 页面的初始数据
   */
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    placeData: {},
    parkingLots: [
      {
        name: '云南大学楸苑地下停车场',
        location: '云南省昆明市呈贡区云南大学楸苑三栋',
        distance: '1.3km',
        availableSpots: '557',
        availableTime: '00:00~23:59'
      },
      {
        name: '云南大学楸苑地下停车场',
        location: '云南省昆明市呈贡区云南大学楸苑三栋',
        distance: '1.3km',
        availableSpots: '557',
        availableTime: '00:00~23:59'
      },
      {
        name: '云南大学楸苑地下停车场',
        location: '云南省昆明市呈贡区云南大学楸苑三栋',
        distance: '1.3km',
        availableSpots: '557',
        availableTime: '00:00~23:59'
      },
      {
        name: '云南大学楸苑地下停车场',
        location: '云南省昆明市呈贡区云南大学楸苑三栋',
        distance: '1.3km',
        availableSpots: '557',
        availableTime: '00:00~23:59'
      },

    ]
  },

  onLoad: function () {
    var that = this;
    wx.getFuzzyLocation({
      type: 'gcj02',
      success: function (res) {
        console.log("@", res)
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        });

        // 获取 map 组件的上下文
        var mapContext = wx.createMapContext('map');
        // 将地图中心移动到定位成功的位置
        mapContext.moveToLocation({
          latitude: res.latitude,
          longitude: res.longitude
        });
      },
      fail: function (err) {
        console.log("@", err);
      }
    });
  },
  // 搜索地址
  searchPlace() {
    console.log("搜索")
    const that = this;
    wx.chooseLocation({
      type: 'gcj02', // 必填，返回可以用于wx.openLocation的经纬度
      success: function (res) {
        // 调用微信接口获取当前的地理位置
        const latitude = res.latitude;
        const longitude = res.longitude;
        that.setData({
          longitude: longitude,
          latitude: latitude,
        });
        // 获取 map 组件的上下文
        var mapContext = wx.createMapContext('map');
        // 将地图中心移动到定位成功的位置
        mapContext.moveToLocation({
          latitude: res.latitude,
          longitude: res.longitude
        });
        // // 更新markers数据
        // const marker = {
        //   latitude: latitude,
        //   longitude: longitude,
        //   // ...其他标记点属性，如标题、图标等
        // };
        // this.setData({
        //   markers: [marker] // 更新标记点数组
        // });
      },
      fail: function (err) {
        console.error("获取位置信息失败：", err);
      }
    });
  },
  //预约
  reserveParking: function() {
    // 这里可以添加预约车位的逻辑
    wx.showToast({
      title: '预约成功',
      icon: 'success',
      duration: 2000
    });
  }
})