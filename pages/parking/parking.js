// pages/train/train.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // indicatorDots: false,
    // autoplay: true,
    // interval: 5000,
    // duration: 1000,
    // imgUrls: [
    //   '/images/haibao/1.jpg',
    //   '/images/haibao/2.jpg',
    //   '/images/haibao/3.jpg'
    // ],
    currentTab: 0,
    start: "大理",
    end: "昆明",
    //时间组件初始数据
    timeValue: "2024-01-01 00:00",
    // 后端数据
    parkingListInfo: [],
  },
  //日期选择
  handleChange(e) {
    console.log(e)
    this.setData({
      timeValue: e.detail.dateString
    })
  },

  /**
   * 车辆管理测试
   */
  vehicle() {
    wx.navigateTo({ //跳转车辆管理页面
      url: '../vehicle/vehicle'
    })
  },
  //地图测试
  getMap(){
    wx.navigateTo({
      url: '/pages/location/location.js',
    })
  },

  switchNav: function (e) {
    this.setData({
      currentTab: e.currentTarget.id
    })
  },
  bindStartInput: function (e) {
    this.setData({
      start: e.detail.value
    })
  },
  bindEndInput: function (e) {
    this.setData({
      end: e.detail.value
    })
  },
  //交换起始地点
  changeStartAndEnd: function (e) {
    this.setData({
      end: e.target.dataset.start,
      start: e.target.dataset.end
    })
  },

  formSubmit: function (e) {
    // console.log(e)
    var startStation = e.detail.value.startStation; //始发地
    var endStation = e.detail.value.endStation; //目的地
    var timeValue = this.data.timeValue; //日期
    wx.navigateTo({ //跳转到查询结果页面
      url: '../parkingList/parkingList?startStation=' + startStation + '&endStation=' + endStation + '&timeValue=' + timeValue,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取当前时间
    const currentDate = new Date();
    // 格式化日期时间为字符串，例如：YYYY-MM-DD HH:mm
    const formattedDate = currentDate.getFullYear() + "-" +
      ("0" + (currentDate.getMonth() + 1)).slice(-2) + "-" +
      ("0" + currentDate.getDate()).slice(-2) + " " +
      ("0" + currentDate.getHours()).slice(-2) + ":" +
      ("0" + currentDate.getMinutes()).slice(-2);
    // 将格式化后的时间赋值给timeValue
    this.setData({
      timeValue: formattedDate
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
})