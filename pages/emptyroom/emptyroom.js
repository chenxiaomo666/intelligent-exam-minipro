// pages/emptyroom/emptyroom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'https://dev.mylwx.cn:9990/cxm/emptyroom',
      method: "GET",
      success(res){
        console.log(res);
        that.setData({
          weekday: res.data.result.weekday,
          time: res.data.result.time,
          all : res.data.result.all,
          morning:  res.data.result.morning,
          afternoon:  res.data.result.afternoon,
          evening: res.data.result.evening,
          one_two: res.data.result.one_two,
          three_four : res.data.result.three_four,
          five_six:  res.data.result.five_six,
          seven_eight:  res.data.result.seven_eight,
          nine_ten: res.data.result.nine_ten,
          is_first: res.data.result.is_first,
          frequency: res.data.result.frequency,
          countdown: res.data.result.countdown
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