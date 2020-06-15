// pages/subjectInfo/subjectInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isOver : false,
    choiceList : [],
  },
  submitExam(){
    console.log(this.data.choiceList);
  },
  radioChange(e){
    var curChoiceList = this.data.choiceList;
    curChoiceList[this.data.subjectInfo.index-1] = e.detail.value;
    console.log(e.detail.value);
    this.setData({
      choiceList : curChoiceList
    })
  },
  checkboxChange(e){
    var curChoiceList = this.data.choiceList;
    curChoiceList[this.data.subjectInfo.index-1] = e.detail.value;
    console.log(e.detail.value);
    this.setData({
      choiceList : curChoiceList
    })
  },
  nextSubject(){
    var that = this;
    wx.request({
      url: 'http://dev.mylwx.cn:9999/cxm/subject/get',
      method: "GET",
      data: {
        subject_index : that.data.subjectInfo.index + 1,
        exam_number : that.data.subjectInfo.exam_number
      },
      success(res){
        console.log(res.data);
        if(res.data.status=="error"){
          that.setData({
            isOver : true,
          })
        };
        that.setData({
          subjectInfo : res.data.result,
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userInfo = JSON.parse(options.userInfo);
    var subjectInfo = JSON.parse(options.subjectInfo);
    
    var choiceList = [];
    var i = 0;
    for(i; i<subjectInfo.subject_number; i++){
      choiceList.push(null);
    };
    console.log(choiceList);
    this.setData({
      userInfo : userInfo,
      subjectInfo : subjectInfo,
      choiceList : choiceList
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