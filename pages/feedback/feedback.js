Page({
    data:{
      feedbackText: "", // 用于存储用户输入的反馈信息
    },
    inputFeedback: function (e) {
      this.setData({
        feedbackText: e.detail.value,
      });
    },
    submitFeedback: function () {
      const feedback = this.data.feedbackText;
  
      if (feedback) {
        // 这里可以添加提交反馈的逻辑，例如将 feedback 发送到后端或保存到数据库
        wx.showToast({
          title: "反馈已提交",
          icon: "success",
          duration: 2000,
        });
      } else {
        wx.showToast({
          title: "请填写反馈信息",
          icon: "none",
          duration: 2000,
        });
      }
    },
    onLoad:function(options){
      // 页面初始化 options为页面跳转所带来的参数
    },
    onReady:function(){
      // 页面渲染完成
    },
    onShow:function(){
      // 页面显示
    },
    onHide:function(){
      // 页面隐藏
    },
    onUnload:function(){
      // 页面关闭
    }
  })