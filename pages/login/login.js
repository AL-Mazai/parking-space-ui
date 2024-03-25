// pages/login/login.js
Page({
  data: {
    username: '',
    password: ''
  },
  inputUsername(e) {
    this.setData({
      username: e.detail.value
    })
  },
  inputPassword(e) {
    this.setData({
      password: e.detail.value
    })
  },
  login() {
    // 在此处编写登录逻辑，可以调用后台接口进行验证
    const username = this.data.username;
    const password = this.data.password;
    console.log("发送登录请求....");
    if (username && password) {
      // 发起登录请求
      wx.request({
        url: 'https://3fa302f2.r21.cpolar.top/user/login', // 后端登录接口地址
        method: 'POST', // 使用POST方法
        data: {
          name: username,
          password: password
        }, // 发送到后端的数据
        success: function (res) {
          if (res.statusCode === 200) {
            // 假设后端返回的数据中包含用户信息和token
            wx.setStorageSync('userInfo', res.data.data);
            wx.setStorageSync('token', res.data.data.token);
            wx.setStorageSync('isLogin', true);
            // 登录成功后的操作，返回
            wx.navigateBack({
              delta: 1 // 返回页面数，1 表示返回上一级页面
            });
          } else {
            // 登录失败，提示错误信息
            wx.showToast({
              title: res.data.message || '登录失败',
              icon: 'none'
            });
          }
        },
        fail: function () {
          // 请求失败，提示错误信息
          wx.showToast({
            title: '登录请求失败',
            icon: 'none'
          });
        }
      });
    } else {
      // 输入不完整，提示用户
      wx.showToast({
        title: '用户名或密码不能为空',
        icon: 'none'
      });
    }
    // wx.setStorageSync('isLogin', true);
  }
})