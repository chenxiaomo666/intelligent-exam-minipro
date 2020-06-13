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
    //console.log(this.data.trueName, this.data.schoolID, this.data.schoolName)
    var data = {
      "true_name":this.data.trueName,
      "openid":this.data.userData.openid,
      "nickname":this.data.userData.userInfo.nickName,
      "head_img":this.data.userData.userInfo.avatarUrl,
      "sex":this.data.userData.userInfo.gender,
      "school_ID":this.data.schoolID,
      "school_name":this.data.schoolName,
      "is_teacher":this.data.userData.isTeacher,
    };
    wx.request({
      url: 'http://dev.mylwx.cn:9999/cxm/user/add',
      method:"POST",
      data:data,
      success(res){
        console.log(res.data)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userData = JSON.parse(options.userData);
    this.setData({
      userData: userData,
    });
    console.log(this.data.userData);
    // console.log(this.data.isTeacher, typeof(this.data.isTeacher));
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