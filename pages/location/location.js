// pages/location.js
// 引用腾讯地图
var QQMapWX = require('../utils/qqmap-wx-jssdk');
var qqmapsdk;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    rgcData: {},
    placeData: {},
    parkingLots: [{
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

    ],
  },

  onLoad: function () {
    var that = this;
    // 实例化腾讯地图API核心类
    qqmapsdk = new QQMapWX({
      key: 'AU7BZ-7233J-7CWFL-XNDFH-BAHPE-J3BGV'
    });

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
      },
      fail: function (err) {
        console.error("获取位置信息失败：", err);
      }
    });
    //获取到经纬度信息后，利用经纬度信息获取位置附近的车库信息
    console.log(this.data.latitude)
    console.log(this.data.longitude)
  },


  //预约
  reserveParking: function () {
    // 这里可以添加预约车位的逻辑
    wx.showToast({
      title: '预约成功',
      icon: 'success',
      duration: 2000
    });
  }
})