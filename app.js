App({
  onLaunch: function () {
    const user = {
      username:"临时用户",
      password:"123"
    }
    wx.setStorageSync('isLogin', false);
    wx.setStorageSync('userInfo', user);
  }
})