Page({
  data: {
    // garageInfo1: {
    //   name: '大理车库',
    //   number: '001',
    //   capacity: 100,
    //   emptySpaces: 25,
    //   price: 10,
    //   location: '人民北路'
    // },
    garageInfo: {},
    garageImage: "/images/switch.png"
  },
  onLoad: function (e) {
    // 对参数进行解码并解析为对象
    const garageInfo = JSON.parse(e.parkingInfo); 
    // console.log(garageInfo.parking)
    this.setData({
      garageInfo: garageInfo.parking.parkingLot
    })
  },
  //预约
  reserve: function(){
    wx.showToast({
      title: '预约成功！',
      icon: 'success',
      duration: 1000
    })
  },

  onShow: function () {
    // 页面显示
  },
})