// pages/loginIndex/loginIndex.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    isTeacher: null,
    openid: null,
  },
  getUserInfo(e) {
    var that = this;
    var isTeacher = e.currentTarget.dataset.isteacher;
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      isTeacher: isTeacher,
    })
    wx.login({
      success(res) {
        var code = res.code;
        wx.request({
          url: 'https://dev.mylwx.cn:9999/cxm/user/query',
          data: {
            js_code: res.code,
            grant_type: "authorization_code"
          },
          method: "GET",
          success(res) {
            // console.log(res.data)
            that.setData({
              openid: res.data.openid
            })
            var userData = {
              userInfo: that.data.userInfo,
              openid: that.data.openid,
              isTeacher: that.data.isTeacher,
            };
            var str=JSON.stringify(userData)
            if (res.data.is_bind) { // 用户绑定了学号
              wx.navigateTo({
                url: '/pages/index/index', // 登录后主页
              })
            } else {
              wx.navigateTo({
                url: '/pages/bindSchoolInfo/bindSchoolInfo?userData='+str, // 绑定页面
              })
            }
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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