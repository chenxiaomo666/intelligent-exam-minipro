// pages/index/index.js
const app = getApp()

Page({
  
  /**
   * 页面的初始数据
   */
  data: {

  },

  emptyRoom(){
    wx.navigateTo({
      url: '/pages/emptyroom/emptyroom',
    })
  },

  getUserInfo(e){
    var that = this;
    app.globalData.userInfo = e.detail.userInfo;
    console.log(app.globalData.userInfo);
    wx.login({
      success(res) {
        var code = res.code;
        wx.request({
          url: 'https://dev.mylwx.cn:9990/cxm/user/query',
          data: {
            js_code: res.code,
            grant_type: "authorization_code"
          },
          method: "GET",
          success(res) {
            console.log(res.data)
            var isBind = res.data.is_bind;
            if(isBind){
              if(res.data.user_info.is_teacher==0){
                var userInfoStr = JSON.stringify(res.data.user_info);
                wx.navigateTo({
                    url: '/pages/examIndex/examIndex?userInfo='+userInfoStr, // 进去抽取试卷页面
                  })
              }else{
                var userInfoStr = JSON.stringify(res.data.user_info);
                wx.navigateTo({
                  url: '/pages/teacherIndex/teacherIndex?userInfo='+userInfoStr
                })
              }
            }
            else{
              var userInfoStr = JSON.stringify(e.detail.userInfo);
              wx.navigateTo({
                url: '/pages/loginIndex/loginIndex?userInfo='+userInfoStr+'&openid='+res.data.user_info.openid, // 进去选择身份页面
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