// pages/personalInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      avatar: 'http://qny.cai142857.cn/2023/09/25/11b26fe8e957458b8e6c00abd5be2b5c.png', // 替换为实际头像图片路径
      name: '临时用户',
      phone: '15877712345',
      company: '公司名称', // 替换为实际公司名称
      gender: '男',
      birthday: '1990-01-01'
    }

  },

  //退出登录
  logout:function(){
    wx.setStorageSync('isLogin', false);
    wx.removeStorageSync('username')
    wx.removeStorageSync('token')

    wx.navigateBack({
      delta: 1
    })

    wx.showToast({
      title: '退出登录成功',
      icon: 'success'
    });
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
    const userInfo = wx.getStorageSync('userInfo');
    console.log("userInfo：", userInfo)
    this.setData({
      'user.name': userInfo.name
    });
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