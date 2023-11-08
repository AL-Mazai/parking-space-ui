// pages/train/train.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [
      '/images/haibao/1.jpg',
      '/images/haibao/2.jpg',
      '/images/haibao/3.jpg'
    ],
    currentTab: 0,
    start: "昆明",
    end: "大理",
    time: "11:00",
    // 后端接口测试数据
    businessTypeList: [],
  },

  /**
   * 调用后端接口测试
   */
  getBusinessList() {
    console.log("开始发送请求....")
    // 1 发送异步请求获取数据
    wx.request({
      url: 'http://localhost:10010/businessType/getAllType', //请求的接口地址
      success: (result) => {
        const businessTypeList = result.data.data;
        console.log(businessTypeList);
        this.setData({
          businessTypeList: businessTypeList
        });
      }
    });
  },

  /**
   * 地图测试
   */
  getMap() {
    wx.navigateTo({ //跳转到地图
      url: '../location/location'
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
  change: function (e) {
    this.setData({
      end: e.target.dataset.start,
      start: e.target.dataset.end
    })
  },
  bindDateChange: function (e) {
    console.log(e)
    this.setData({
      time: e.detail.value
    });
    console.log(this.data.time);
  },
  formSubmit: function (e) {
    var startStation = e.detail.value.startStation; //始发地
    var endStation = e.detail.value.endStation; //目的地
    var date = e.detail.value.date; //日期
    wx.navigateTo({ //跳转到查询结果页面
      url: '../parkingList/parkingList?startStation=' + startStation + '&endStation=' + endStation + '&date=' + date,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})