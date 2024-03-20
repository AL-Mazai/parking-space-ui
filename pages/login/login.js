// pages/login/login.js
Page({
  data: {
    phone: '',
    password: ''
  },
  inputUsername(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  inputPassword(e) {
    this.setData({
      password: e.detail.value
    })
  },
  login() {
    // 在此处编写登录逻辑，可以调用后台接口进行验证
    console.log('Phone:', this.data.phone);
    console.log('Password:', this.data.password);
    console.log("开始发送登录请求....");
    // wx.navigateTo({
    //   url: '/pages/mycenter/mycenter'
    // })
    wx.navigateBack({
      delta: 1  // 返回页面数，1 表示返回上一级页面
    });
    wx.setStorageSync('isLogin', true);

    // 1 发送异步请求获取数据
    // wx.request({
    //   url: 'https://1eef6bdc.r27.cpolar.top/getParkingLot', //请求的接口地址
    //   success: (result) => {
    //     const parkingListInfo = result.data;
    //     console.log(parkingListInfo);
    //     this.setData({
    //       parkingListInfo: parkingListInfo
    //     });
    //   }
    // });
  }
})