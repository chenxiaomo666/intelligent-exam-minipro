// pages/loginIndex/loginIndex.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
  choiceIdentity(e) {
    var isTeacher = e.currentTarget.dataset.isteacher;
    var userInfoStr = JSON.stringify(this.data.userInfo);
    var openid = this.data.openid;
    wx.navigateTo({
      url: '/pages/bindSchoolInfo/bindSchoolInfo?userInfo='+userInfoStr+'&isTeacher='+isTeacher+'&openid='+openid, // 绑定页面
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userInfo = JSON.parse(options.userInfo);
    var openid = options.openid
    this.setData({
      userInfo : userInfo,
      openid : openid
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