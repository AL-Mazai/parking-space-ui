// pages/vehicle/vehicle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carList: [{
        logo: 'http://qny.cai142857.cn/%E8%BD%A6.png',
        plateNumber: '云A12345',
        ownerName: '张三丰',
        ownerPhone: '13812345678'
      },
      {
        logo: 'http://qny.cai142857.cn/image/1.png',
        plateNumber: '云A67890',
        ownerName: '李四',
        ownerPhone: '13987654321'
      },
      {
        logo: '/images/switch.png',
        plateNumber: '云A67450',
        ownerName: '王五',
        ownerPhone: '13945654421'
      },
      {
        logo: '/images/switch.png',
        plateNumber: '云A6453',
        ownerName: '小明',
        ownerPhone: '13987623451'
      },
      {
        logo: '/images/switch.png',
        plateNumber: '云A67845',
        ownerName: '西门吹雪',
        ownerPhone: '13984567213'
      },
      // 添加更多车辆信息...
    ],
  },
  edit: function (e) {
    console.log(e)
  },
  search(e) {
    // 搜索逻辑，根据输入的内容过滤车辆列表
    // const keyword = e.detail.value.trim().toLowerCase();
    // const filteredCarList = this.data.carList.filter(item => {
    //   return item.plateNumber.toLowerCase().includes(keyword) || item.ownerName.toLowerCase().includes(keyword);
    // });
    // this.setData({
    //   carList: filteredCarList
    // });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})