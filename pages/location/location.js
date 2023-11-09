// pages/location.js
// // 引入SDK核心类
// var QQMapWX = require('../../libs/qqmap-wx-jssdk');
// var qqmapsdk;
// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.js');
var wxMarkerData = [];
Page({

    /**
     * 页面的初始数据
     */
    data: {
        markers: [],
        latitude: '',
        longitude: '',
        placeData: {}
    },
    makertap: function (e) {
        var that = this;
        var id = e.markerId;
        that.showSearchInfo(wxMarkerData, id);
        that.changeMarkerColor(wxMarkerData, id);
    },
    onLoad: function () {
        var that = this;
        // 新建百度地图对象 
        var BMap = new bmap.BMapWX({
            ak: 'kK0sCRXVAwGooHGQiPIn0yw8qcDR8wd0'
        });
        var fail = function (data) {
            console.log(data)
        };
        var success = function (data) {
            wxMarkerData = data.wxMarkerData;
            that.setData({
                markers: wxMarkerData
            });
            that.setData({
                latitude: wxMarkerData[0].latitude
            });
            that.setData({
                longitude: wxMarkerData[0].longitude
            });
        }
        // 发起POI检索请求 
        BMap.search({
            "query": '学校',
            fail: fail,
            success: success,
            // 此处需要在相应路径放置图片文件 
            iconPath: '/images/switch.png',
            // 此处需要在相应路径放置图片文件 
            iconTapPath: '/images/switch.png'
        });
    },
    showSearchInfo: function (data, i) {
        var that = this;
        that.setData({
            placeData: {
                title: '名称：' + data[i].title + '\n',
                address: '地址：' + data[i].address + '\n',
                telephone: '电话：' + data[i].telephone
            }
        });
    },
    changeMarkerColor: function (data, i) {
        var that = this;
        var markers = [];
        for (var j = 0; j < data.length; j++) {
            if (j == i) {
                // 此处需要在相应路径放置图片文件 
                data[j].iconPath = "/images/switch.png";
            } else {
                // 此处需要在相应路径放置图片文件 
                data[j].iconPath = "/images/switch.png";
            }
            markers[j](data[j]);
        }
        that.setData({
            markers: markers
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    // onLoad: function (options) {
    //     // 实例化API核心类
    //     qqmapsdk = new QQMapWX({
    //         key: 'AU7BZ-7233J-7CWFL-XNDFH-BAHPE-J3BGV'
    //     });
    //     this.mapCtx = wx.createMapContext('map')
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