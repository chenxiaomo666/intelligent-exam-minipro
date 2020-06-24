// pages/teacherIndex/teacherIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  histroySubmit(e){
    var userId = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/historyList/historyList?userId='+userId
    })
  },

  changeID(){
    var that = this;
    wx.request({
      url: 'https://dev.mylwx.cn:9999/cxm/changeId',
      method: "POST",
      data: {
        user_id: that.data.userInfo.user_id
      },
      success(res){
        var userInfoStr = JSON.stringify(res.data.user_info);
        wx.navigateTo({
            url: '/pages/examIndex/examIndex?userInfo='+userInfoStr, // 进去抽取试卷页面
          })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userInfo = JSON.parse(options.userInfo);
    this.setData({
      userInfo : userInfo
    })
    var that = this;
    wx.request({
      url: 'https://dev.mylwx.cn:9999/cxm/student/list',
      method: "GET",
      success(res){
        that.setData({
          studentList: res.data.student_list
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