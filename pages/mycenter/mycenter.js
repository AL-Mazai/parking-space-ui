// pages/personnel/personnel.js

Page({
  data: {
    username: "zzw",
    phone: "15877712345",
    isLogin: false
  },
  //跳转登录
  toLogin() {
    wx.navigateTo({
      url: '../login/login'
    })
  },
  //跳转反馈页面
  navigateToFeedbackPage: function () {
    wx.navigateTo({
      url: '/pages/feedback/feedback', // 此处是反馈页面的路径
    });
  },
  //跳转停车记录页面
  navigateToParkingRecord: function(){
      const loginStatus = wx.getStorageSync('isLogin')
      console.log(loginStatus)
      if(loginStatus === true){
        wx.navigateTo({
          url: '/pages/record/record',
        });
      }else{
        wx.navigateTo({
          url: '/pages/login/login', // 未登录无法查看停车记录
        });
        wx.showToast({
          title: '您尚未登录！',
          icon: 'none',
          duration: 1000
        });
      }
  },
  //跳转个人信息页面
  toPersonalInfo:function(){
    wx.navigateTo({
      url: '/pages/personalInfo/personalInfo'
    });
  },

  onLoad: function (options) {

  },

  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    const isLogin = wx.getStorageSync('isLogin');
    this.setData({
      isLogin: isLogin,
    });
    // console.log(isLogin)
    if (isLogin) {
      // 用户已登录，可以进行后续操作
      const userInfo = wx.getStorageSync('userInfo');
      // console.log("userInfo：", userInfo)
      this.setData({
        username: userInfo.name // 假设userInfo是对象，包含用户信息
      });
      // 根据实际情况，可以在这里进行页面跳转或其他操作
    }
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})