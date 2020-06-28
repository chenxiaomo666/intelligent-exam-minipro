// pages/examIndex/examIndex.js
Page({

  /**
   * 页面的初始数据
   */
  // userInfo = {
  //   head_img: "https://wx.qlogo.cn/mmopen/vi_32/93hQRexSMpNpy2M9mbEqBA3XMeBp85CG20ApqurDY787LTANYiajW9IlTiaTkdABpC92Hic4IIGrKMyOMIsbtheicQ/132",
  //   is_teacher: 0,
  //   nickname: "chr(38472)+chr(23567)+chr(38476)",
  //   openid: "oGl9P5YBk5OMH9LMA4pxhWEBf0vA",
  //   true_name: "陈小陌",
  //   user_id: 2,
  // }

  data: {
    examNumber : null,
    subjectNumber : null,
  },
  histroySubmit(){
    var that = this;
    wx.navigateTo({
      url: '/pages/historyList/historyList?userId='+that.data.userInfo.user_id
    })
  },
  startExam(){
    var that = this;
    wx.request({
      url: 'https://dev.mylwx.cn:9999/cxm/subject/get',
      // data: {},
      method: "GET",
      success(res) {
        console.log(res.data);
        var exam_number = 0;
        if(res.data.result.exam_number != null){
          exam_number = res.data.result.exam_number;
        }
        that.setData({
          examNumber : exam_number,
          subjectNumber : res.data.result.subject_number,
          subjectInfo : res.data.result
        });
        setTimeout(function(){
          var userInfo = that.data.userInfo;
          var subjectInfo = that.data.subjectInfo;
          var userInfoStr = JSON.stringify(userInfo);
          var subjectInfoStr = JSON.stringify(subjectInfo);

          wx.navigateTo({
            url: '/pages/subjectInfo/subjectInfo?userInfo='+userInfoStr+'&subjectInfo='+subjectInfoStr, // 绑定页面
          });
        }, 2000);
    },
  });
  },

  changeID(){
    var that = this;
    wx.request({
      url: 'https://dev.mylwx.cn:9999/cxm/change/teacher',
      method: "POST",
      data: {
        user_id: that.data.userInfo.user_id
      },
      success(res){
        var userInfoStr = JSON.stringify(res.data.user_info);
        wx.navigateTo({
            url: '/pages/teacherIndex/teacherIndex?userInfo='+userInfoStr, // 进去抽取试卷页面
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