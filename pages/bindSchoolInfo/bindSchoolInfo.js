// pages/bindSchoolInfo/bindSchoolInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  trueNameInput(e) {
    this.setData({
      trueName: e.detail.value
    })
  },
  schoolNameInput(e) {
    this.setData({
      schoolName: e.detail.value
    })
  },
  schoolIDInput(e) {
    this.setData({
      schoolID: e.detail.value
    })
  },
  submit() {
    var that = this;
    if(that.data.trueName == null){
      wx.showToast({
      title: '姓名未填写！',
      icon: "none",   //success,loading,none
      duration: 2000,
    })
    }else if(that.data.schoolName == null){
      wx.showToast({
        title: '校名未填写！',
        icon: "none",   //success,loading,none
        duration: 2000,
      })
    }else if(that.data.schoolID == null){
      wx.showToast({
        title: 'ID未填写！',
        icon: "none",   //success,loading,none
        duration: 2000,
      })
    }else{
      wx.request({
        url: 'https://dev.mylwx.cn:9990/cxm/user/add',
        method:"POST",
        data: {
          true_name: that.data.trueName,
          openid: that.data.openid,
          nickname: that.data.userInfo.nickName,
          head_img: that.data.userInfo.avatarUrl,
          sex: that.data.userInfo.gender,
          school_ID: that.data.schoolID,
          school_name: that.data.schoolName,
          is_teacher: that.data.isTeacher,
          },
        success(res){
          console.log(res.data)
          var userInfoStr = JSON.stringify(res.data.user_info);
          if(res.data.user_info.is_teacher){
            wx.navigateTo({
              url: '/pages/teacherIndex/teacherIndex'
            })
          }
          else{
            wx.navigateTo({
              url: '/pages/examIndex/examIndex?userInfo='+userInfoStr, // 进去抽取试卷页面
            })
          } 
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userInfo = JSON.parse(options.userInfo);
    var isTeacher = options.isTeacher;
    var openid = options.openid;
    this.setData({
      userInfo : userInfo,
      isTeacher: isTeacher,
      openid : openid,
    });
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