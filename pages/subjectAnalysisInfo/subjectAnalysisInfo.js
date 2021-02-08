// pages/subjectAnalysisInfo/subjectAnalysisInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  returnIndex(){
    var userInfo = this.data.userInfo;
    var userInfoStr = JSON.stringify(userInfo);
    wx.navigateTo({
      url: '/pages/examIndex/examIndex?userInfo='+userInfoStr
    });
  },

  returnInfo(){
    var that = this;
    wx.navigateTo({
      url: '/pages/historyList/historyList?userId='+this.data.userInfo.user_id
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://dev.mylwx.cn:9990/cxm/subject/analysis',
      method: "GET",
      data : {
        history_id : options.historyId
      },
      success(res){
        console.log(res.data)
        that.setData({
          examInfo : res.data.exam_info,
          userInfo : res.data.user_info,
          userAnswerInfo : res.data.user_answer_info,
        })
      }
    })
    
  },

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