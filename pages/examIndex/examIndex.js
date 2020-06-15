// pages/examIndex/examIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name : "陈小陌",
    openid : null,
    examNumber : null,
    subjectNumber : null,
  },
  
  startExam(){
    var that = this;
    wx.request({
      url: 'http://dev.mylwx.cn:9999/cxm/subject/get',
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
          var userInfo = {
            name : that.data.name,
            openid : that.data.openid
          }
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