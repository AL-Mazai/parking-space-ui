var jsonData = require('../data/data.js');
var date = "";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    parkingList: [],
    date: "",
    items: [{
        name: 'time_priority',
        value: '时间优先',
        checked: 'true'
      },
      {
        name: 'distance_priority',
        value: '距离优先'
      },
      {
        name: 'probability_priority',
        value: '概率优先'
      },
      {
        name: 'fast_parking',
        value: '快捷停车'
      },
    ],
    radio: '1',
  },
  onChange(event) {
    this.setData({
      radio: event.detail,
    });
  },
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  /**
   * 跳转到车库信息页面
   */
  navigateToParkingInfo: function (e) {
    const parking = e.currentTarget.dataset.parking;
    console.log(parking)
    wx.navigateTo({
      url: '/pages/parkingInfo/parkingInfo'
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var startStation = e.startStation; //从超链接中获取查询的数据
    var endStation = e.endStation;
    date = e.date;
    var data = jsonData.parkingList; //读取data.js中定义的json数据
    var result = data.filter(p => { //过滤json数据
      return (p.startStation == startStation && p.endStation == endStation)
    });
    this.setData({
      date: date,
      parkingList: result
    })
    console.log('start=' + startStation + "--end=" + endStation + "--date=" + date);
  },
  myGetDate: function (num) {
    var datetime = new Date(date);
    datetime.setDate(datetime.getDate() + num); //计算num天后的日期
    var y = datetime.getFullYear();
    var m = datetime.getMonth() + 1;
    var d = datetime.getDate();
    return y + "-" + m + "-" + d;
  },
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