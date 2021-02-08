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
    var examAllTime = (new Date().valueOf() - this.data.examStartTime)/1000;
    var that = this;
    console.log(this.data.choiceList);
    wx.request({
      url: 'https://dev.mylwx.cn:9990/cxm/subject/submit',
      method: "POST",
      data:{
        user_info : that.data.userInfo,
        choice_list : that.data.choiceList,
        exam_number : that.data.subjectInfo.exam_number,
        time_spent : examAllTime,
      },
      success(res){
        console.log(res.data);
        if(res.data.code==200){
          wx.showToast({
            title: '提交成功',
            icon: "success",   //success,loading,none
            duration: 2000,
          });
          wx.navigateTo({
            url: '/pages/subjectAnalysisInfo/subjectAnalysisInfo?historyId='+res.data.history_id
          });
        }
        else{

        }
      },
    })
  },
  choiceChange(e){
    var index = this.data.subjectInfo.index;
    var item = this.data.choiceList[index-1];
    var key = 'choiceList['+index-1+']';
    var answerChange = this.data.choiceList[index-1].answerChange;
    console.log(this.data.choiceList[index-1]); // 
    answerChange.push(e.detail.value)
    item.userAnswer = e.detail.value;
    item.timeSpent = this.data.choiceList[index-1].timeSpent + (new Date()).valueOf() - this.data.choiceList[index-1].timeSpentStart;
    item.answerChange = answerChange
    console.log(e.detail.value);
    this.setData({
      key : item
    })
  },
  lastSubject(){
    var that = this;
    wx.request({
      url: 'https://dev.mylwx.cn:9990/cxm/subject/get',
      method: "GET",
      data: {
        subject_index : that.data.subjectInfo.index - 1,
        exam_number : that.data.subjectInfo.exam_number
      },
      success(res){
        console.log(res.data);
        if(res.data.status=="error"){
          that.setData({
            isOver : true,
          })
        }
        else{
          var index = res.data.result.index;
          var item = that.data.choiceList[index-1];
          item.subjectIndex = index;
          item.subjectContent = res.data.result.content;
          item.subjectChoice = res.data.result.choice_content;
          item.subjectAnswer = res.data.result.reference_answer;
          item.subjectType = res.data.result.subject_type;
          item.timeSpentStart = (new Date()).valueOf();
          if(that.data.choiceList[index-1].answerChange == null){
            item.answerChange = []
          }
          var key = 'choiceList['+index-1+']';
          that.setData({
            subjectInfo : res.data.result,
            key : item
          })
        }
      },
    })
  },
  nextSubject(){
    var that = this;
    wx.request({
      url: 'https://dev.mylwx.cn:9990/cxm/subject/get',
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
        }else{
          var index = res.data.result.index;
          var item = that.data.choiceList[index-1];
          item.subjectIndex = index;
          item.subjectContent = res.data.result.content;
          item.subjectChoice = res.data.result.choice_content;
          item.subjectAnswer = res.data.result.reference_answer;
          item.subjectType = res.data.result.subject_type;
          item.timeSpentStart = (new Date()).valueOf();
          if(that.data.choiceList[index-1].answerChange == null){
            item.answerChange = []
          }
          var key = 'choiceList['+index-1+']';
          that.setData({
            subjectInfo : res.data.result,
            key : item
          })
        }
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var examStartTime = new Date().valueOf();
    var userInfo = JSON.parse(options.userInfo);
    var subjectInfo = JSON.parse(options.subjectInfo);
    var choiceList = [{
      subjectIndex : subjectInfo.index,
      subjectContent : subjectInfo.content,
      subjectChoice : subjectInfo.choice_content,
      subjectAnswer : subjectInfo.reference_answer,
      subjectType : subjectInfo.subject_type,
      userAnswer : null,
      timeSpentStart : (new Date()).valueOf(),
      timeSpent : 0,
      answerChange : []
    }];
    var i = 0;
    for(i+1; i<subjectInfo.subject_number; i++){
      choiceList.push({
        subjectIndex : null,
        subjectContent : null,
        subjectChoice : null,
        subjectAnswer : null,
        subjectType : null,
        userAnswer : null,
        timeSpentStart : null,
        timeSpent : 0,
        answerChange : null
      });
    };
    console.log(choiceList);
    this.setData({
      userInfo : userInfo,
      subjectInfo : subjectInfo,
      choiceList : choiceList,
      examStartTime : examStartTime,
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