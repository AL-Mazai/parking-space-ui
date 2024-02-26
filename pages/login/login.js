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
  }
})