var jsonData = require('../data/data.js');
var date = "";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    parkingList: [],
    startStation: '',
    endStation: '',
    startTime: '',
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
    const parkingInfo = e.currentTarget.dataset
    // console.log("@", parkingInfo)
    wx.navigateTo({
      url: '/pages/parkingInfo/parkingInfo?parkingInfo=' + JSON.stringify(parkingInfo)
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    // console.log(e)
    var startStation = e.startStation; //从超链接中获取查询的数据
    var endStation = e.endStation;
    var time = e.timeValue;
    this.setData({
      startStation: startStation,
      endStation: endStation,
      startTime: time
    });

    wx.request({
      url: 'http://parkingprediction.frp.fafudie.top/forecast/resultAndSort',
      data: {
        arrivalTime: time,
        location: endStation,
        sortType: "3"
      },
      success: (result) => {
        const parkingListInfo = result.data.data;
        console.log(parkingListInfo);
        // 遍历parkingListInfo数组，将probability属性转换为百分比
        const formattedParkingList = parkingListInfo.map(item => {
          // 将probability属性转换为百分比，并保留两位小数
          const probabilityPercentage = (item.probability * 100).toFixed(2);
          // 将百分比添加到对象中，并将probability属性替换为百分比属性
          return {
            ...item,
            probability: probabilityPercentage + '%' // 添加百分号
          };
        });
        // console.log("@", formattedParkingList)
        this.setData({
          parkingList: formattedParkingList
        });
        // console.log("@", this.data.parkingList)
      }
    });
  },


  // myGetDate: function (num) {
  //   var datetime = new Date(date);
  //   datetime.setDate(datetime.getDate() + num); //计算num天后的日期
  //   var y = datetime.getFullYear();
  //   var m = datetime.getMonth() + 1;
  //   var d = datetime.getDate();
  //   return y + "-" + m + "-" + d;
  // },
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
})